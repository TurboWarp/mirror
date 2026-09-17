// BeanMod Custom Theme & Addon Injector
// Save this file as 'beanmod.js' in your repository and reference it in your index.html
(function() {
    console.log("🫘 BeanMod Theme Framework Loading...");

    // ==========================================
    // 🎨 CUSTOM THEME COLOR CONFIGURATION (BEANMOD STYLE)
    // You can change these Hex values to customize your theme colors!
    // ==========================================
    const THEME = {
        primaryDark:   '#2b1810',  // Dark Coffee Bean Base
        secondaryDark: '#3d251a',  // Lighter Bean Accent
        canvasBg:      '#1c0f0a',  // Main Code Workspace Background
        textLight:     '#f7eade',  // Soft Cream Text
        accentGreen:   '#7fa655',  // Sprout Green Accent (Bean theme!)
        borderLine:    '#4a3125'   // Clean border separators
    };

    // 1. Inject Style Sheets
    const style = document.createElement('style');
    style.id = 'beanmod-theme-styles';
    style.textContent = `
        /* Main background, margins, wrapper frames */
        body, 
        .gui_page-wrapper_20Z7f, 
        [class*="gui_page-wrapper"],
        [class*="stage-wrapper_stage-wrapper"] { 
            background-color: ${THEME.canvasBg} !important; 
            color: ${THEME.textLight} !important; 
        }
        
        /* Top Navigation Menu Bar */
        [class*="gui_menu-bar"], 
        .menu-bar_menu-bar_21itW { 
            background-color: ${THEME.primaryDark} !important; 
            border-bottom: 2px solid ${THEME.accentGreen} !important; 
        }
        
        /* Text alignment inside top navigation menu */
        [class*="menu-bar_menu-bar-item"] { 
            color: ${THEME.textLight} !important; 
        }
        
        /* Left Category Menu Selector Sidebar */
        [class*="scratchCategoryMenu"],
        .injectionDiv .blocklyToolboxDiv { 
            background-color: ${THEME.primaryDark} !important; 
            border-right: 1px solid ${THEME.borderLine} !important;
        }
        
        /* Main Code Canvas Workspace background grid */
        .injectionDiv, 
        .blocklySvg, 
        [class*="asset-panel_asset-panel"],
        .blocklyMainBackground { 
            fill: ${THEME.canvasBg} !important;
            background-color: ${THEME.canvasBg} !important; 
        }
        
        /* Block flyout shelf tray container background */
        .blocklyFlyoutBackground { 
            fill: ${THEME.secondaryDark} !important; 
            fill-opacity: 0.98 !important; 
        }
        
        /* Sprite management control panel grid layout box */
        [class*="sprite-selector_sprite-selector"],
        [class*="stage-selector_stage-selector"] { 
            background-color: ${THEME.secondaryDark} !important; 
            border: 1px solid ${THEME.borderLine} !important; 
        }
        
        /* Sprite information panel settings block header */
        [class*="sprite-info_sprite-info"],
        [class*="form_input-form"] { 
            background-color: ${THEME.primaryDark} !important; 
            color: ${THEME.textLight} !important;
            border-radius: 6px !important;
            border: 1px solid ${THEME.borderLine} !important;
        }

        /* Direct modifications to standard buttons */
        button, [class*="button_button"] {
            border-radius: 4px !important;
        }
    `;
    document.head.appendChild(style);

    // 2. Add BeanMod Custom Addon: Performance Watermark & Frame Tracker
    const addon = document.createElement('div');
    addon.id = "beanmod-performance-addon";
    addon.style = `
        position: fixed; 
        bottom: 12px; 
        right: 12px; 
        background: ${THEME.primaryDark}; 
        color: ${THEME.accentGreen}; 
        padding: 6px 12px; 
        font-family: 'Courier New', monospace; 
        font-size: 11px; 
        font-weight: bold;
        border-radius: 6px; 
        z-index: 99999; 
        border: 1px solid ${THEME.accentGreen};
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    `;
    addon.textContent = "🫘 BeanMod Engine v1.0 | Loading...";
    document.body.appendChild(addon);

    // Frame Counter Engine loop
    let lastTimestamp = performance.now();
    let frameSequenceCount = 0;
    function runLoop() {
        frameSequenceCount++;
        let currentTimestamp = performance.now();
        if (currentTimestamp >= lastTimestamp + 1000) {
            addon.textContent = "🫘 BeanMod v1.0 | FPS: " + frameSequenceCount;
            frameSequenceCount = 0;
            lastTimestamp = currentTimestamp;
        }
        requestAnimationFrame(runLoop);
    }
    requestAnimationFrame(runLoop);

    console.log("🎉 BeanMod Custom Canvas Layout Injected Successfully!");
})();
