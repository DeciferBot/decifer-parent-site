# Generates public/diagrams/architecture.svg. Run: python3 design/architecture.py
# Geometry is computed, not eyeballed. Edit the labels here, never the SVG.
# -*- coding: utf-8 -*-
"""Systems architecture diagram: the four layers, their components, and the path a request takes."""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from icons import icon

# Paths resolve from the repo root regardless of where this is run from.
ROOT = pathlib.Path(__file__).resolve().parent.parent

W = 1600
INK, BODY, MUTED, FAINT = "#252a31", "#4a5058", "#727984", "#a3a9b1"
CANV, PANEL, LINE = "#f1f2f4", "#ffffff", "#d2d6dc"
GBAND, GEDGE = "#e9ebee", "#c2c8d0"
ORANGE, ODEEP, OTINT, OLINE, BAND = "#f05a28", "#c2431b", "#fdeee8", "#f0b096", "#fdf5f1"

F = 'font-family="Figtree,sans-serif"'
M = 'font-family="IBM Plex Mono,monospace"'
S = 'font-family="Source Serif 4,Georgia,serif"'
o = []

def container(x, y, w, h, label, sub="", ai=False):
    fill, edge, lc = (BAND, ORANGE, ODEEP) if ai else (GBAND, GEDGE, MUTED)
    s = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" fill="{fill}" stroke="{edge}" stroke-width="{2 if ai else 1.4}"/>'
    s += f'<text x="{x+24}" y="{y+34}" {F} font-size="19" font-weight="700" letter-spacing="1.6" fill="{lc}">{label}</text>'
    if sub:
        s += f'<text x="{x+w-24}" y="{y+34}" text-anchor="end" {F} font-size="16" fill="{lc if ai else MUTED}">{sub}</text>'
    return s

def node(x, y, w, h, ic, l1, l2="", ai=False, strong=False):
    edge = ORANGE if ai else LINE
    icol = ORANGE if ai else MUTED
    sw = 2 if strong else 1.4
    s = f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="7" fill="{PANEL}" stroke="{edge}" stroke-width="{sw}"/>'
    s += icon(ic, x + 16, y + (h - 26)/2 - (7 if l2 else 0), 26, icol)
    tx = x + 54
    if l2:
        s += f'<text x="{tx}" y="{y+h/2-1}" {F} font-size="16.5" font-weight="600" fill="{INK}">{l1}</text>'
        s += f'<text x="{tx}" y="{y+h/2+20}" {F} font-size="14" fill="{MUTED}">{l2}</text>'
    else:
        s += f'<text x="{tx}" y="{y+h/2+6}" {F} font-size="16.5" font-weight="600" fill="{INK}">{l1}</text>'
    return s

def chip(x, y, w, h, ic, label, ai=False):
    edge = OLINE if ai else LINE
    icol = ORANGE if ai else MUTED
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="{PANEL}" stroke="{edge}" stroke-width="1.3"/>'
            + icon(ic, x + 12, y + (h-20)/2, 20, icol)
            + f'<text x="{x+40}" y="{y+h/2+5.5}" {F} font-size="15" fill="{BODY}">{label}</text>')

def sub(x, y, w, h, label):
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{PANEL}" stroke="{OLINE}" stroke-width="1.3"/>'
            f'<text x="{x+18}" y="{y+27}" {M} font-size="13.5" letter-spacing="1.5" fill="{ODEEP}">{label}</text>')

def head(x, y1, y2, color, label="", dash=False, lx=None, up=False):
    """Vertical connector with an arrowhead."""
    da = ' stroke-dasharray="7 6"' if dash else ''
    tip = y2 if not up else y2
    s = f'<line x1="{x}" y1="{y1}" x2="{x}" y2="{tip + (13 if up else -13)}" stroke="{color}" stroke-width="2.2" stroke-linecap="round"{da}/>'
    pts = f"{x},{tip} {x-7},{tip+14} {x+7},{tip+14}" if up else f"{x},{tip} {x-7},{tip-14} {x+7},{tip-14}"
    s += f'<polygon points="{pts}" fill="{color}"/>'
    if label:
        s += f'<text x="{lx or x+16}" y="{(y1+y2)/2+5}" {F} font-size="15" fill="{color}">{label}</text>'
    return s

MG, CW = 60, W - 120

# ---------------------------------------------------------------- channels
y = 168
container(MG, y, CW, 132, "CHANNELS", "where the work arrives")
o.append(container(MG, y, CW, 132, "CHANNELS", "where the work arrives"))
ch = [("browser","Web app"),("monitor","Mobile"),("mail","Email"),("mail","Slack"),("person","Voice"),("plug","Partner API")]
nw, ng = 222, 20
sx = MG + (CW - (len(ch)*nw + (len(ch)-1)*ng))/2
for i,(ic,l) in enumerate(ch):
    o.append(node(sx + i*(nw+ng), y+56, nw, 58, ic, l))
end_ch = y + 132

# ---------------------------------------------------------------- application
y = end_ch + 62
o.append(container(MG, y, CW, 140, "APPLICATION LAYER", "the product around the intelligence"))
ap = [("browser","Interface","screens and flows"),("plug","Public API","for other systems"),
      ("key","Access","auth, sessions, roles"),("case","Billing","plans and usage")]
nw, ng = 330, 26
sx = MG + (CW - (len(ap)*nw + (len(ap)-1)*ng))/2
for i,(ic,a,b) in enumerate(ap):
    o.append(node(sx + i*(nw+ng), y+56, nw, 62, ic, a, b))
end_ap = y + 140

o.append(head(W/2, end_ch, y, MUTED, "a request that needs judgement", False, W/2+18))

# ---------------------------------------------------------------- AI layer
y = end_ap + 76
AI_Y = y
IX, IW = MG + 30, CW - 60

# the path a request takes
fy = y + 62
steps = [("doc","Assemble the context"),("chip","Ask the model"),("shield","Check the answer"),("gear","Take the action")]
snw, sng = 306, 62
ssx = MG + (CW - (len(steps)*snw + (len(steps)-1)*sng))/2
for i,(ic,l) in enumerate(steps):
    nx = ssx + i*(snw+sng)
    o.append(node(nx, fy, snw, 66, ic, l, "", True, True))
    o.append(f'<circle cx="{nx-1}" cy="{fy}" r="16" fill="{ORANGE}"/>'
             f'<text x="{nx-1}" y="{fy+6}" text-anchor="middle" {F} font-size="16" font-weight="700" fill="#fff">{i+1}</text>')
    if i < len(steps)-1:
        x0, x1 = nx+snw, nx+snw+sng
        o.append(f'<line x1="{x0+8}" y1="{fy+33}" x2="{x1-20}" y2="{fy+33}" stroke="{ORANGE}" stroke-width="2.2" stroke-linecap="round"/>'
                 f'<polygon points="{x1-6},{fy+33} {x1-20},{fy+26} {x1-20},{fy+40}" fill="{ORANGE}"/>')
end_flow = fy + 66

# what each step draws on
sy2 = end_flow + 54
SH = 158
sw_ = (IW - 2*22)/3
groups = [
  ("MEMORY", [("memory","Conversation"),("person","User profile"),("db","Semantic recall"),("search","Retrieval")], 1),
  ("MODEL GATEWAY", [("chip","GPT"),("chip","Claude"),("chip","Gemini"),("branch","Routing and fallback")], 2),
  ("TOOLS IT CAN USE", [("search","Search"),("mail","Email"),("clock","Calendar"),("plug","Internal APIs")], 4),
]
for gi,(gname, items, feeds) in enumerate(groups):
    gx = IX + gi*(sw_+22)
    o.append(sub(gx, sy2, sw_, SH, gname))
    cw_ = (sw_ - 3*16)/2
    for ii,(ic,l) in enumerate(items):
        cx_ = gx + 16 + (ii % 2)*(cw_+16)
        cy_ = sy2 + 44 + (ii//2)*54
        o.append(chip(cx_, cy_, cw_, 44, ic, l, True))
    # arrow up into the step it feeds
    tgt = ssx + (feeds-1)*(snw+sng) + snw/2
    src = gx + sw_/2
    my = sy2 - 26
    o.append(f'<path d="M{src},{sy2-6} V{my} H{tgt} V{end_flow+10}" fill="none" stroke="{OLINE}" stroke-width="1.8" stroke-linecap="round"/>'
             f'<polygon points="{tgt},{end_flow+2} {tgt-6.5},{end_flow+16} {tgt+6.5},{end_flow+16}" fill="{OLINE}"/>')
end_sub = sy2 + SH

# Control is drawn as a rail rather than four more boxes: guardrails check the
# answer, permissions gate the action, evaluation and audit cover the lot. It
# attaches to the whole path, so an arrow into any single step would be a lie.
cy3 = end_sub + 76
o.append(f'<text x="{IX}" y="{cy3-46}" {M} font-size="13.5" letter-spacing="1.5" fill="{ODEEP}">'
         f'CONTROL, RUNNING ACROSS ALL FOUR STEPS</text>')
o.append(f'<line x1="{IX}" y1="{cy3-22}" x2="{IX+IW}" y2="{cy3-22}" stroke="{ORANGE}" stroke-width="1.6"/>')
for i in range(len(steps)):
    tx = ssx + i*(snw+sng) + snw/2
    o.append(f'<line x1="{tx}" y1="{cy3-22}" x2="{tx}" y2="{cy3-32}" stroke="{ORANGE}" stroke-width="1.6"/>'
             f'<circle cx="{tx}" cy="{cy3-34}" r="3" fill="{ORANGE}"/>')
ctl = [("shield","Guardrails"),("person","Human approval"),("eye","Evaluation"),("doc","Audit trail")]
cnw = (IW - 3*22)/4
for i,(ic,l) in enumerate(ctl):
    o.append(chip(IX + i*(cnw+22), cy3, cnw, 50, ic, l, True))
AI_H = cy3 + 50 + 30 - AI_Y
o.insert(len(o) - (len(groups)*(1+4) + 4 + len(steps)*2 + (len(steps)-1) + 3), "")  # placeholder, container drawn below
end_ai = AI_Y + AI_H

o.append(head(W/2, end_ap, AI_Y, ORANGE, "", False))

# ---------------------------------------------------------------- bottom layers
y = end_ai + 74
BW = (CW - 40)/2
o.append(container(MG, y, BW, 208, "BUSINESS SYSTEMS", "what the business already runs on"))
# Named from the sectors in caseShapes.ts rather than a generic CRM and ERP:
# catering quotes, event bookings, counselling intake, property pricing.
bs = [("clock","Bookings and diary"),("doc","Quotes and pricing"),("person","Client records"),
      ("case","Invoicing and payments"),("folder","Stock and suppliers"),("doc","Notes and intake")]
cw_ = (BW - 4*20)/3
for i,(ic,l) in enumerate(bs):
    o.append(chip(MG+20 + (i%3)*(cw_+20), y+52 + (i//3)*62, cw_, 50, ic, l))

DX = MG + BW + 40
o.append(container(DX, y, BW, 208, "DATA AND INFRASTRUCTURE", "the foundations"))
ds = [("db","PostgreSQL"),("search","Vector store"),("folder","Object storage"),("cloud","Compute"),("branch","CI/CD"),("eye","Observability")]
for i,(ic,l) in enumerate(ds):
    o.append(chip(DX+20 + (i%3)*(cw_+20), y+52 + (i//3)*62, cw_, 50, ic, l))

o.append(head(MG+BW/2, end_ai, y, MUTED, "reads and writes the record", False, MG+BW/2+16))
o.append(head(DX+BW/2, end_ai, y, MUTED, "context, storage, audit", False, DX+BW/2+16))

# the answer coming back
rx = W - MG + 26
o.append(f'<path d="M{W-MG-4},{AI_Y+40} H{rx} V{end_ch+72} H{W-MG-4}" fill="none" stroke="{MUTED}" '
         f'stroke-width="1.8" stroke-dasharray="7 6" stroke-linecap="round"/>'
         f'<polygon points="{W-MG-6},{end_ch+72} {W-MG+8},{end_ch+65} {W-MG+8},{end_ch+79}" fill="{MUTED}"/>')
o.append(f'<text x="{rx+14}" y="{(AI_Y+end_ch)/2}" {F} font-size="15" fill="{MUTED}" transform="rotate(90 {rx+14} {(AI_Y+end_ch)/2})" text-anchor="middle">the answer returns</text>')

end_bot = y + 208
H = end_bot + 70

# AI container goes behind its contents
ai_box = container(MG, AI_Y, CW, AI_H, "THE AI LAYER", "the only part that gets built", True)
body = "".join(x for x in o if x)
# find where the AI layer content starts and inject the container before it
marker = o.index(next(x for x in o if 'r="16" fill="'+ORANGE in x))
body = "".join(o[:marker-1]) + ai_box + "".join(o[marker-1:])

svg = f'''<svg viewBox="0 0 {W} {H}" width="100%" xmlns="http://www.w3.org/2000/svg" role="img"
 aria-label="Systems architecture diagram. Channels feed the application layer, which passes requests needing judgement into the AI layer. Inside the AI layer a request is assembled, sent to the model, checked and acted on, drawing on memory, a model gateway and tools. The AI layer reads and writes business systems and data infrastructure, and the answer returns to the application.">
<rect width="{W}" height="{H}" fill="{CANV}"/>
<text x="{MG}" y="70" {M} font-size="14" letter-spacing="2.6" fill="{ORANGE}">DECIFER</text>
<text x="{MG}" y="122" {S} font-size="46" font-weight="600" fill="{INK}">How the pieces actually connect</text>
{body}
</svg>'''
open(ROOT / "public/diagrams/architecture.svg", "w").write(svg)
print("H", H)
