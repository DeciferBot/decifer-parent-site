# Generates public/diagrams/where-ai-sits.svg. Run: python3 design/where-ai-sits.py
# Geometry is computed, not eyeballed. Edit the labels here, never the SVG.
# -*- coding: utf-8 -*-
W = 1180
INK, BODY, MUTED, FAINT = "#252a31", "#4a5058", "#727984", "#a3a9b1"
CANV, PANEL, LINE = "#f1f2f4", "#ffffff", "#d7dade"
# grey = what does not change
G_TOP, G_LEFT, G_RIGHT, G_EDGE = "#e9ebee", "#c9ced5", "#dcdfe4", "#b6bcc4"
ORANGE, ODEEP, OTINT = "#f05a28", "#c2431b", "#fdeee8"

CX, w, h, d = 520, 230, 115, 30
STEP = 74
F = 'font-family="Figtree,sans-serif"'
M = 'font-family="IBM Plex Mono,monospace"'
S = 'font-family="Source Serif 4,Georgia,serif"'

def slab(cy, top, left, right, stroke, dep=d, sw=1.5):
    T = f"{CX},{cy} {CX+w},{cy+h} {CX},{cy+2*h} {CX-w},{cy+h}"
    L = f"{CX-w},{cy+h} {CX},{cy+2*h} {CX},{cy+2*h+dep} {CX-w},{cy+h+dep}"
    R = f"{CX+w},{cy+h} {CX},{cy+2*h} {CX},{cy+2*h+dep} {CX+w},{cy+h+dep}"
    return (f'<polygon points="{L}" fill="{left}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>'
            f'<polygon points="{R}" fill="{right}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>'
            f'<polygon points="{T}" fill="{top}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>')

def grey_slab(cy):  return slab(cy, G_TOP, G_LEFT, G_RIGHT, G_EDGE)
def ai_slab(cy):    return slab(cy, OTINT, ODEEP, ORANGE, ODEEP, d + 10, 2)

def tag(cy, title, sub, color=INK, subcolor=MUTED, rule=LINE, weight=600):
    y = cy + h
    x0, x1, tx = CX + w, CX + w + 56, CX + w + 70
    return (f'<line x1="{x0}" y1="{y}" x2="{x1}" y2="{y}" stroke="{rule}" stroke-width="1.3" stroke-linecap="round"/>'
            f'<circle cx="{x0}" cy="{y}" r="3.2" fill="{rule}"/>'
            f'<text x="{tx}" y="{y-4}" {F} font-size="22" font-weight="{weight}" fill="{color}">{title}</text>'
            f'<text x="{tx}" y="{y+19}" {F} font-size="15" fill="{subcolor}">{sub}</text>')

def head(y, num, text):
    return (f'<text x="70" y="{y}" {M} font-size="13.5" letter-spacing="2.2" fill="{FAINT}">{num}</text>'
            f'<text x="70" y="{y+40}" {S} font-size="36" font-weight="600" fill="{INK}">{text}</text>'
            f'<line x1="70" y1="{y+60}" x2="{W-70}" y2="{y+60}" stroke="{INK}" stroke-width="1.8"/>')

def note(y, *lines):
    return "".join(f'<text x="70" y="{y+i*30}" {F} font-size="19" fill="{c}">{t}</text>'
                   for i, (t, c) in enumerate(lines))

def arrow(x, y0, y1, color, sw=1.8, head_w=6):
    """A clean vertical arrow with a sharp head."""
    return (f'<line x1="{x}" y1="{y0}" x2="{x}" y2="{y1-11}" stroke="{color}" stroke-width="{sw}" stroke-linecap="round"/>'
            f'<polygon points="{x},{y1} {x-head_w},{y1-12} {x+head_w},{y1-12}" fill="{color}"/>')

o = []

# ---------------- 01 ----------------
Y = 190
o.append(head(Y, "01", "What you already run"))
b1 = Y + 105
rows = [("Applications",     "where people meet your business"),
        ("Business systems", "where the work is recorded"),
        ("Foundations",      "data, infrastructure and security")]
for i in reversed(range(3)):
    o.append(grey_slab(b1 + i*STEP))
for i in range(3):
    o.append(tag(b1 + i*STEP, *rows[i]))
end1 = b1 + 2*STEP + 2*h + d
o.append(note(end1 + 56, ("Three layers, already in place, in every business that runs on computers.", BODY)))

# ---------------- 02 ----------------
Y = end1 + 130
o.append(head(Y, "02", "Where AI fits"))
b2 = Y + 105
LIFT = 62
ys = [b2, b2 + STEP + 26, b2 + 2*STEP + LIFT, b2 + 3*STEP + LIFT]
for i in reversed(range(4)):
    o.append(ai_slab(ys[i]) if i == 1 else grey_slab(ys[i]))

AX = 262
def annot(y0, y1, l1, l2):
    mid = (y0 + y1) / 2
    return (arrow(AX, y0, y1, MUTED)
            + f'<text x="70" y="{mid-4}" {M} font-size="13.5" fill="{MUTED}">{l1}</text>'
            + f'<text x="70" y="{mid+16}" {M} font-size="13.5" fill="{MUTED}">{l2}</text>')

o.append(annot(ys[0] + 2*h + d - 14, ys[1] + h - 10,  "work that needs",  "judgement"))
o.append(annot(ys[1] + 2*h + d + 2,  ys[2] + h - 10,  "reads the record,", "writes the outcome"))

r2 = [("Applications",     "unchanged",              MUTED, FAINT, LINE,  500),
      ("The AI layer",     "the only new layer",     ODEEP, ODEEP, ORANGE, 700),
      ("Business systems", "unchanged",              MUTED, FAINT, LINE,  500),
      ("Foundations",      "unchanged, now decisive", MUTED, FAINT, LINE,  500)]
for i in range(4):
    o.append(tag(ys[i], *r2[i]))
end2 = ys[3] + 2*h + d
o.append(note(end2 + 56,
              ("One new layer, between the screens and the systems of record.", BODY),
              ("Until now that work was done by people, or by rules that broke on anything unusual.", MUTED)))

# ---------------- 03 ----------------
Y = end2 + 160
o.append(head(Y, "03", "Inside the new layer"))
sy = Y + 100
sw_, sh_, sd_ = 128, 64, 24
T = f"{CX},{sy} {CX+sw_},{sy+sh_} {CX},{sy+2*sh_} {CX-sw_},{sy+sh_}"
L = f"{CX-sw_},{sy+sh_} {CX},{sy+2*sh_} {CX},{sy+2*sh_+sd_} {CX-sw_},{sy+sh_+sd_}"
R = f"{CX+sw_},{sy+sh_} {CX},{sy+2*sh_} {CX},{sy+2*sh_+sd_} {CX+sw_},{sy+sh_+sd_}"
o.append(f'<polygon points="{L}" fill="{ODEEP}" stroke="{ODEEP}" stroke-width="2" stroke-linejoin="round"/>'
         f'<polygon points="{R}" fill="{ORANGE}" stroke="{ODEEP}" stroke-width="2" stroke-linejoin="round"/>'
         f'<polygon points="{T}" fill="{OTINT}" stroke="{ODEEP}" stroke-width="2" stroke-linejoin="round"/>')
o.append(f'<text x="{CX}" y="{sy+sh_+7}" text-anchor="middle" {F} font-size="17" font-weight="700" fill="{ODEEP}">The AI layer</text>')

gw, gh, gap = 250, 96, 20
gy = sy + 2*sh_ + sd_ + 78
r1x, r2x = 70, 70 + (gw + gap)//2
parts = [("The model",           "rented, by the unit",              True),
         ("What it can read",    "the records placed in front of it", False),
         ("What it retains",     "and what it must forget",          False),
         ("What it can act on",  "send, book, refund",               False),
         ("Where a person approves", "the sign-off point",           False),
         ("Continuous assurance","providers change it silently",     False),
         ("Audit trail",         "what you show a regulator",        False)]

apex_x, apex_y = CX, sy + 2*sh_ + sd_
for i in range(7):
    x = (r1x + i*(gw+gap)) if i < 4 else (r2x + (i-4)*(gw+gap))
    y = gy if i < 4 else gy + gh + gap
    o.append(f'<line x1="{apex_x}" y1="{apex_y}" x2="{x+gw/2}" y2="{y-7}" stroke="{LINE}" stroke-width="1.1"/>')

for i, (t, s, is_model) in enumerate(parts):
    x = (r1x + i*(gw+gap)) if i < 4 else (r2x + (i-4)*(gw+gap))
    y = gy if i < 4 else gy + gh + gap
    if is_model:
        o.append(f'<rect x="{x}" y="{y}" width="{gw}" height="{gh}" rx="5" fill="{ORANGE}"/>'
                 f'<text x="{x+20}" y="{y+40}" {F} font-size="21" font-weight="700" fill="#2b1409">{t}</text>'
                 f'<text x="{x+20}" y="{y+64}" {F} font-size="14.5" fill="#612c13">{s}</text>')
    else:
        o.append(f'<rect x="{x}" y="{y}" width="{gw}" height="{gh}" rx="5" fill="{PANEL}" stroke="{LINE}" stroke-width="1.3"/>'
                 f'<text x="{x+20}" y="{y+40}" {F} font-size="19" font-weight="600" fill="{INK}">{t}</text>'
                 f'<text x="{x+20}" y="{y+64}" {F} font-size="14.5" fill="{MUTED}">{s}</text>')
gend = gy + 2*gh + gap

# ---------------- 04 ----------------
Y = gend + 76
PH = 168
o.append(f'<rect x="70" y="{Y}" width="{W-140}" height="{PH}" rx="6" fill="{INK}"/>'
         f'<text x="106" y="{Y+44}" {F} font-size="15" letter-spacing="1.8" fill="{FAINT}">WHAT MOST BUDGETS COVER</text>')
bx, by, bw, bh, bg = 106, Y+66, 129, 42, 11
for i in range(7):
    o.append(f'<rect x="{bx+i*(bw+bg)}" y="{by}" width="{bw}" height="{bh}" rx="3" '
             f'fill="{ORANGE if i==0 else "none"}" stroke="{ORANGE if i==0 else "#4e555e"}" stroke-width="1.5"/>')
o.append(f'<text x="106" y="{by+bh+34}" {F} font-size="18" fill="#c9ced4">'
         f'The model is one part in seven. The other six decide whether it can be trusted in production.</text>')

H = Y + PH + 76
svg = f'''<svg viewBox="0 0 {W} {H}" width="100%" xmlns="http://www.w3.org/2000/svg" role="img"
 aria-label="Where AI fits in a business technology stack. Applications, business systems and foundations already exist and are shown in grey. AI is one new layer, shown in orange, between the applications and the business systems. Inside that layer the model is one part in seven.">
<rect width="{W}" height="{H}" fill="{CANV}"/>
<text x="70" y="76" {M} font-size="13.5" letter-spacing="2.6" fill="{ORANGE}">DECIFER</text>
<text x="70" y="128" {S} font-size="50" font-weight="600" fill="{INK}">Where AI actually sits</text>
{"".join(o)}
</svg>'''

open("public/diagrams/where-ai-sits.svg","w").write(svg)
print("H", H)
