import math

def create_leaf(x, y, length, width, angle_deg, color="#727A6B"):
    rad = math.radians(angle_deg)
    cos_a = math.cos(rad)
    sin_a = math.sin(rad)
    
    # Base at (x, y), tip at distance `length` along angle
    tip_x = x + length * cos_a
    tip_y = y + length * sin_a
    
    # Perpendicular vector for leaf bulge
    perp_x = -sin_a * width
    perp_y = cos_a * width
    
    # Smooth organic bezier curves
    c1_x = x + length * 0.35 * cos_a + perp_x
    c1_y = y + length * 0.35 * sin_a + perp_y
    c2_x = x + length * 0.72 * cos_a + perp_x * 0.65
    c2_y = y + length * 0.72 * sin_a + perp_y * 0.65
    
    c3_x = x + length * 0.72 * cos_a - perp_x * 0.65
    c3_y = y + length * 0.72 * sin_a - perp_y * 0.65
    c4_x = x + length * 0.35 * cos_a - perp_x
    c4_y = y + length * 0.35 * sin_a - perp_y
    
    path_d = f"M {x:.1f} {y:.1f} C {c1_x:.1f} {c1_y:.1f}, {c2_x:.1f} {c2_y:.1f}, {tip_x:.1f} {tip_y:.1f} C {c3_x:.1f} {c3_y:.1f}, {c4_x:.1f} {c4_y:.1f}, {x:.1f} {y:.1f} Z"
    vein_d = f"M {x:.1f} {y:.1f} Q {(x+tip_x)/2:.1f} {(y+tip_y)/2:.1f} {tip_x:.1f} {tip_y:.1f}"
    
    svg = f'<path d="{path_d}" fill="{color}" opacity="0.82" />\n'
    svg += f'<path d="{vein_d}" fill="none" stroke="#525A4B" stroke-width="0.65" opacity="0.5" />\n'
    return svg

def generate_svg():
    width = 440
    height = 680
    
    out = []
    out.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%" preserveAspectRatio="none">')
    
    # 1. Inner hairline frame
    out.append(f'''
    <!-- Delicate Inner Border -->
    <g stroke="#93988C" stroke-width="0.85" fill="none" opacity="0.75">
      <!-- Top line -->
      <line x1="130" y1="28" x2="205" y2="28" />
      <line x1="235" y1="28" x2="310" y2="28" />
      
      <!-- Bottom line -->
      <line x1="130" y1="652" x2="205" y2="652" />
      <line x1="235" y1="652" x2="310" y2="652" />
      
      <!-- Left line -->
      <line x1="32" y1="135" x2="32" y2="315" />
      <line x1="32" y1="365" x2="32" y2="545" />
      
      <!-- Right line -->
      <line x1="408" y1="135" x2="408" y2="315" />
      <line x1="408" y1="365" x2="408" y2="545" />
      
      <!-- Rounded corner connections -->
      <path d="M 130 28 C 75 28 32 71 32 135" />
      <path d="M 310 28 C 365 28 408 71 408 135" />
      <path d="M 32 545 C 32 609 75 652 130 652" />
      <path d="M 408 545 C 408 609 365 652 310 652" />
    </g>

    <!-- Center Top Flourish -->
    <g transform="translate(220, 28)">
      <circle cx="0" cy="0" r="1.8" fill="#6A7263" />
      <circle cx="-12" cy="0" r="1.2" fill="#6A7263" />
      <circle cx="12" cy="0" r="1.2" fill="#6A7263" />
      <path d="M -8 0 Q 0 -4 8 0" fill="none" stroke="#6A7263" stroke-width="0.75" />
    </g>

    <!-- Center Bottom Flourish -->
    <g transform="translate(220, 652)">
      <circle cx="0" cy="0" r="1.8" fill="#6A7263" />
      <circle cx="-12" cy="0" r="1.2" fill="#6A7263" />
      <circle cx="12" cy="0" r="1.2" fill="#6A7263" />
      <path d="M -8 0 Q 0 4 8 0" fill="none" stroke="#6A7263" stroke-width="0.75" />
    </g>
    ''')
    
    # 2. Corner Botanical Definition (Top-Left)
    tl_svg = []
    tl_svg.append('<g id="corner-botanical">')
    
    # Main arched stem curving precisely around the corner without intruding into the center
    # Stays close to (32, 135) -> arc -> (130, 28)
    stem_main = "M 132 28 C 78 28 32 74 32 138"
    tl_svg.append(f'<path d="{stem_main}" fill="none" stroke="#636A5D" stroke-width="1.2" stroke-linecap="round" />')
    
    # Subtle trailing twigs
    stem_outer = "M 62 48 C 50 36 38 42 26 50"
    tl_svg.append(f'<path d="{stem_outer}" fill="none" stroke="#636A5D" stroke-width="0.8" stroke-linecap="round" />')

    stem_inner = "M 56 68 C 70 82 86 96 104 102"
    tl_svg.append(f'<path d="{stem_inner}" fill="none" stroke="#636A5D" stroke-width="0.85" stroke-linecap="round" />')
    
    stem_top_lead = "M 100 29 C 114 27 128 32 142 30"
    tl_svg.append(f'<path d="{stem_top_lead}" fill="none" stroke="#636A5D" stroke-width="0.8" stroke-linecap="round" />')

    stem_left_lead = "M 32 100 C 30 114 35 128 33 144"
    tl_svg.append(f'<path d="{stem_left_lead}" fill="none" stroke="#636A5D" stroke-width="0.8" stroke-linecap="round" />')

    # Natural olive leaves along the corner arch
    leaves = [
        # Along main arch
        (128, 28, 16, 4.8, 175),
        (112, 30, 15, 4.6, 140),
        (112, 30, 14, 4.4, -165),
        (92, 36, 16, 4.8, 130),
        (92, 36, 15, 4.5, 65),
        (74, 46, 17, 5.0, 115),
        (74, 46, 15, 4.6, 45),
        (58, 60, 18, 5.2, 95),
        (58, 60, 16, 4.8, 25),
        (46, 78, 17, 5.0, 75),
        (46, 78, 15, 4.6, 10),
        (38, 98, 17, 5.0, 60),
        (38, 98, 15, 4.5, -5),
        (33, 120, 16, 4.8, 50),
        (33, 120, 14, 4.3, -15),
        (32, 140, 15, 4.5, 40),
        
        # Inner branch
        (66, 76, 13, 4.2, 55),
        (76, 86, 14, 4.4, 40),
        (88, 94, 14, 4.2, 30),
        (102, 102, 13, 4.0, 20),
        
        # Outer corner buds
        (46, 40, 12, 3.8, -135),
        (32, 48, 13, 4.0, -150),
        
        # Top trailing
        (120, 31, 13, 4.0, 5),
        (140, 30, 12, 3.8, -5),
        
        # Left trailing
        (33, 128, 13, 4.0, 85),
        (34, 144, 12, 3.8, 75)
    ]
    
    for lx, ly, llen, lw, lang in leaves:
        tl_svg.append(create_leaf(lx, ly, llen, lw, lang))
        
    # Delicate berries & stems
    dots = [
        (50, 36), (36, 50), (98, 44), (44, 98), (108, 106),
        (146, 32), (32, 148), (76, 70), (28, 60), (60, 28)
    ]
    for dx, dy in dots:
        tl_svg.append(f'<circle cx="{dx}" cy="{dy}" r="1.6" fill="#586052" />')
        tl_svg.append(f'<path d="M {dx} {dy} l -1.5 -1.5" stroke="#586052" stroke-width="0.6" />')
        
    tl_svg.append('</g>')
    out.append("".join(tl_svg))
    
    # 3. Side Mid-Accent
    side_svg = []
    side_svg.append('<g id="side-accent">')
    # Triple dots on the hairline
    side_svg.append('<circle cx="32" cy="328" r="1.5" fill="#6A7263" />')
    side_svg.append('<circle cx="32" cy="340" r="2.1" fill="#5A6253" />')
    side_svg.append('<circle cx="32" cy="352" r="1.5" fill="#6A7263" />')
    # Small organic leafy sprig curving inward
    side_svg.append('<path d="M 32 340 C 44 336 56 334 68 340" fill="none" stroke="#636A5D" stroke-width="1.0" />')
    side_svg.append(create_leaf(42, 336, 13, 4.2, -20))
    side_svg.append(create_leaf(48, 342, 14, 4.4, 25))
    side_svg.append(create_leaf(62, 339, 14, 4.5, 5))
    side_svg.append('<circle cx="70" cy="340" r="1.6" fill="#586052" />')
    side_svg.append('</g>')
    out.append("".join(side_svg))
    
    # Place all 4 corners and sides
    out.append('<use href="#corner-botanical" />')
    out.append(f'<use href="#corner-botanical" transform="translate({width}, 0) scale(-1, 1)" />')
    out.append(f'<use href="#corner-botanical" transform="translate(0, {height}) scale(1, -1)" />')
    out.append(f'<use href="#corner-botanical" transform="translate({width}, {height}) scale(-1, -1)" />')
    
    out.append('<use href="#side-accent" />')
    out.append(f'<use href="#side-accent" transform="translate({width}, 0) scale(-1, 1)" />')
    
    out.append('</svg>')
    return "\n".join(out)

if __name__ == "__main__":
    svg_content = generate_svg()
    with open("assets/botanical-frame.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Regenerated assets/botanical-frame.svg with perfect proportions!")
