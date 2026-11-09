// Custom SVG Icon Components matching Lucide-React icon specifications
// Zero dependencies, fully scalable, perfectly styled with Tailwind CSS classes

(function() {
  const h = React.createElement;

  function createSvgIcon(paths, viewBox = "0 0 24 24") {
    return function IconComponent({ className = "w-5 h-5", ...props }) {
      return h(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: viewBox,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: className,
          ...props
        },
        paths.map((p, idx) => {
          if (p.type === "path") return h("path", { key: idx, d: p.d, ...p.attrs });
          if (p.type === "circle") return h("circle", { key: idx, cx: p.cx, cy: p.cy, r: p.r, ...p.attrs });
          if (p.type === "line") return h("line", { key: idx, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2, ...p.attrs });
          if (p.type === "rect") return h("rect", { key: idx, x: p.x, y: p.y, width: p.width, height: p.height, rx: p.rx, ...p.attrs });
          if (p.type === "polygon") return h("polygon", { key: idx, points: p.points, ...p.attrs });
          if (p.type === "polyline") return h("polyline", { key: idx, points: p.points, ...p.attrs });
          return null;
        })
      );
    };
  }

  window.Icons = {
    MapPin: createSvgIcon([
      { type: "path", d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" },
      { type: "circle", cx: "12", cy: "10", r: "3" }
    ]),
    Calendar: createSvgIcon([
      { type: "rect", x: "3", y: "4", width: "18", height: "18", rx: "2" },
      { type: "line", x1: "16", y1: "2", x2: "16", y2: "6" },
      { type: "line", x1: "8", y1: "2", x2: "8", y2: "6" },
      { type: "line", x1: "3", y1: "10", x2: "21", y2: "10" }
    ]),
    Users: createSvgIcon([
      { type: "path", d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" },
      { type: "circle", cx: "9", cy: "7", r: "4" },
      { type: "path", d: "M22 21v-2a4 4 0 0 0-3-3.87" },
      { type: "path", d: "M16 3.13a4 4 0 0 1 0 7.75" }
    ]),
    Clock: createSvgIcon([
      { type: "circle", cx: "12", cy: "12", r: "10" },
      { type: "polyline", points: "12 6 12 12 16 14" }
    ]),
    Phone: createSvgIcon([
      { type: "path", d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
    ]),
    Mail: createSvgIcon([
      { type: "rect", x: "2", y: "4", width: "20", height: "16", rx: "2" },
      { type: "path", d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }
    ]),
    MessageSquare: createSvgIcon([
      { type: "path", d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
    ]),
    Car: createSvgIcon([
      { type: "path", d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2" },
      { type: "circle", cx: "7", cy: "17", r: "2" },
      { type: "path", d: "M9 17h6" },
      { type: "circle", cx: "17", cy: "17", r: "2" }
    ]),
    Star: createSvgIcon([
      { type: "polygon", points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2", attrs: { fill: "currentColor" } }
    ]),
    ShieldCheck: createSvgIcon([
      { type: "path", d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" },
      { type: "path", d: "m9 12 2 2 4-4" }
    ]),
    CheckCircle: createSvgIcon([
      { type: "path", d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" },
      { type: "polyline", points: "22 4 12 14.01 9 11.01" }
    ]),
    Check: createSvgIcon([
      { type: "polyline", points: "20 6 9 17 4 12" }
    ]),
    ChevronRight: createSvgIcon([
      { type: "polyline", points: "9 18 15 12 9 6" }
    ]),
    ChevronLeft: createSvgIcon([
      { type: "polyline", points: "15 18 9 12 15 6" }
    ]),
    ChevronDown: createSvgIcon([
      { type: "polyline", points: "6 9 12 15 18 9" }
    ]),
    X: createSvgIcon([
      { type: "line", x1: "18", y1: "6", x2: "6", y2: "18" },
      { type: "line", x1: "6", y1: "6", x2: "18", y2: "18" }
    ]),
    Menu: createSvgIcon([
      { type: "line", x1: "4", y1: "12", x2: "20", y2: "12" },
      { type: "line", x1: "4", y1: "6", x2: "20", y2: "6" },
      { type: "line", x1: "4", y1: "18", x2: "20", y2: "18" }
    ]),
    Search: createSvgIcon([
      { type: "circle", cx: "11", cy: "11", r: "8" },
      { type: "line", x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
    ]),
    Compass: createSvgIcon([
      { type: "circle", cx: "12", cy: "12", r: "10" },
      { type: "polygon", points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }
    ]),
    Heart: createSvgIcon([
      { type: "path", d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }
    ]),
    Sparkles: createSvgIcon([
      { type: "path", d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" },
      { type: "path", d: "M5 3v4" },
      { type: "path", d: "M19 17v4" },
      { type: "path", d: "M3 5h4" },
      { type: "path", d: "M17 19h4" }
    ]),
    Award: createSvgIcon([
      { type: "circle", cx: "12", cy: "8", r: "6" },
      { type: "path", d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" }
    ]),
    Bed: createSvgIcon([
      { type: "path", d: "M2 4v16" },
      { type: "path", d: "M2 8h18a2 2 0 0 1 2 2v10" },
      { type: "path", d: "M2 17h20" },
      { type: "path", d: "M6 8v9" }
    ]),
    Mountain: createSvgIcon([
      { type: "path", d: "m8 3 4 8 5-5 5 15H2L8 3z" }
    ]),
    Camera: createSvgIcon([
      { type: "path", d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" },
      { type: "circle", cx: "12", cy: "13", r: "3" }
    ]),
    Send: createSvgIcon([
      { type: "line", x1: "22", y1: "2", x2: "11", y2: "13" },
      { type: "polygon", points: "22 2 15 22 11 13 2 9 22 2" }
    ]),
    Info: createSvgIcon([
      { type: "circle", cx: "12", cy: "12", r: "10" },
      { type: "line", x1: "12", y1: "16", x2: "12", y2: "12" },
      { type: "line", x1: "12", y1: "8", x2: "12.01", y2: "8" }
    ]),
    Lock: createSvgIcon([
      { type: "rect", x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" },
      { type: "path", d: "M7 11V7a5 5 0 0 1 10 0v4" }
    ]),
    LogOut: createSvgIcon([
      { type: "path", d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" },
      { type: "polyline", points: "16 17 21 12 16 7" },
      { type: "line", x1: "21", y1: "12", x2: "9", y2: "12" }
    ]),
    Trash2: createSvgIcon([
      { type: "polyline", points: "3 6 5 6 21 6" },
      { type: "path", d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" },
      { type: "line", x1: "10", y1: "11", x2: "10", y2: "17" },
      { type: "line", x1: "14", y1: "11", x2: "14", y2: "17" }
    ]),
    Edit: createSvgIcon([
      { type: "path", d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" }
    ]),
    Plus: createSvgIcon([
      { type: "line", x1: "12", y1: "5", x2: "12", y2: "19" },
      { type: "line", x1: "5", y1: "12", x2: "19", y2: "12" }
    ]),
    ArrowRight: createSvgIcon([
      { type: "line", x1: "5", y1: "12", x2: "19", y2: "12" },
      { type: "polyline", points: "12 5 19 12 12 19" }
    ]),
    Pause: createSvgIcon([
      { type: "rect", x: "6", y: "4", width: "4", height: "16", attrs: { fill: "currentColor" } },
      { type: "rect", x: "14", y: "4", width: "4", height: "16", attrs: { fill: "currentColor" } }
    ]),
    Play: createSvgIcon([
      { type: "polygon", points: "5 3 19 12 5 21 5 3", attrs: { fill: "currentColor" } }
    ]),
    WhatsApp: function WhatsAppIcon({ className = "w-5 h-5", ...props }) {
      return h(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512",
          fill: "currentColor",
          className: className,
          ...props
        },
        h("path", {
          d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
        })
      );
    }
  };

  // Safe fallback Proxy: prevents any undefined icon from ever crashing React render
  const defaultFallbackIcon = createSvgIcon([
    { type: "circle", cx: "12", cy: "12", r: "9" }
  ]);
  window.Icons = new Proxy(window.Icons, {
    get: function(target, prop) {
      if (prop in target) return target[prop];
      return defaultFallbackIcon;
    }
  });
})();
