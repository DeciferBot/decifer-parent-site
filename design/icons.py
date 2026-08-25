# -*- coding: utf-8 -*-
"""Line icons drawn on a 24x24 grid. Stroke only, so they take the layer's colour."""

P = {
 "monitor": '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M9 20h6M12 17v3"/>',
 "browser": '<rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="M2.5 9h19"/><circle cx="6" cy="6.5" r="1"/><circle cx="9" cy="6.5" r="1"/>',
 "key":     '<circle cx="7.5" cy="15.5" r="4"/><path d="M10.5 12.5 20 3M17 6l2.5 2.5M14.5 8.5 17 11"/>',
 "gear":    '<circle cx="12" cy="12" r="3.4"/><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3"/>',
 "flow":    '<circle cx="5" cy="6" r="2.6"/><circle cx="5" cy="18" r="2.6"/><circle cx="19" cy="12" r="2.6"/><path d="M7.4 7.2 16.6 11M7.4 16.8 16.6 13"/>',
 "memory":  '<ellipse cx="12" cy="5.5" rx="8.5" ry="3"/><path d="M3.5 5.5v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3v-6"/><path d="M3.5 11.5v6c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3v-6"/>',
 "wrench":  '<path d="M15.5 3.5a5.5 5.5 0 0 0-5 8.2L3.5 18.7l1.8 1.8 7-7a5.5 5.5 0 1 0 3.2-10z"/>',
 "chip":    '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3.5v3.5M14 3.5v3.5M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5"/>',
 "shield":  '<path d="M12 2.8 19.5 6v5.2c0 4.7-3.1 8.3-7.5 10-4.4-1.7-7.5-5.3-7.5-10V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
 "case":    '<rect x="2.5" y="7" width="19" height="13" rx="2"/><path d="M8.5 7V5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 5v2M2.5 12.5h19"/>',
 "server":  '<rect x="2.5" y="3.5" width="19" height="5.5" rx="1.5"/><rect x="2.5" y="15" width="19" height="5.5" rx="1.5"/><path d="M6 6.2h.01M6 17.8h.01M9.5 6.2h.01M9.5 17.8h.01"/>',
 "plug":    '<path d="M9.5 14.5 6 18a3.5 3.5 0 1 1-5-5l3.5-3.5M14.5 9.5 18 6a3.5 3.5 0 1 0-5-5L9.5 4.5"/><path d="M9 15l6-6"/>',
 "db":      '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
 "search":  '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.3 15.3 21 21"/>',
 "folder":  '<path d="M2.5 6.5A2 2 0 0 1 4.5 4.5h4l2 2.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"/>',
 "branch":  '<circle cx="6" cy="5" r="2.6"/><circle cx="6" cy="19" r="2.6"/><circle cx="18" cy="9" r="2.6"/><path d="M6 7.6v8.8M18 11.6c0 4-4.5 3.4-6 5.2"/>',
 "eye":     '<path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/>',
 "person":  '<circle cx="12" cy="7.5" r="4"/><path d="M4 21c0-4.4 3.6-7.5 8-7.5s8 3.1 8 7.5"/>',
 "mail":    '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6.5 9 6.5 9-6.5"/>',
 "doc":     '<path d="M6 2.5h8l5 5v14H6z"/><path d="M14 2.5v5h5M9 13h6M9 17h6"/>',
 "clock":   '<circle cx="12" cy="12" r="9"/><path d="M12 6.5V12l3.6 2.2"/>',
 "cloud":   '<path d="M7 18.5A4.5 4.5 0 0 1 7.3 9.6a6 6 0 0 1 11.5 1.7A4 4 0 0 1 18 18.5z"/>',
}

def icon(name, x, y, size=24, col="#727984", sw=1.7):
    """Place an icon with its top-left at (x, y). Stroke width stays visually constant."""
    k = size / 24.0
    return (f'<g transform="translate({x},{y}) scale({k:.4f})" fill="none" stroke="{col}" '
            f'stroke-width="{sw/k:.3f}" stroke-linecap="round" stroke-linejoin="round">{P[name]}</g>')
