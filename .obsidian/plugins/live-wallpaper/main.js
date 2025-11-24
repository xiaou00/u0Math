"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  DEFAULT_SETTINGS: () => DEFAULT_SETTINGS,
  default: () => LiveWallpaperPlugin3
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/Settings/SettingsManager.ts
var import_obsidian5 = require("obsidian");

// src/Settings/Settings.ts
var import_obsidian2 = require("obsidian");

// src/Settings/SettingsUtils.ts
var import_obsidian = require("obsidian");
var SettingsUtils = class {
  static AttributeValid(attribute) {
    const attr = attribute.trim();
    if (attr === "") return false;
    if (attr.startsWith("--")) return true;
    return false;
  }
  static TargetValid(target) {
    const trimmed = target.trim();
    if (trimmed === "") return false;
    try {
      document.createDocumentFragment().querySelector(trimmed);
      return true;
    } catch {
      return false;
    }
  }
  static async getWallpaperPath(plugin, Index) {
    const settings = plugin.settings;
    const baseDir = plugin.app.vault.configDir;
    let path = "";
    const config = settings.WallpaperConfigs[Index];
    path = `${baseDir}/${config.path}`;
    return path;
  }
  static async getPathExists(plugin, relativePath) {
    if (!relativePath || relativePath.trim() === "") {
      return false;
    }
    const fullPath = `${plugin.app.vault.configDir}/${relativePath}`;
    return await this.wallpaperExists(plugin, fullPath);
  }
  static async wallpaperExists(plugin, path) {
    return await plugin.app.vault.adapter.exists(path);
  }
  static async applyImagePosition(element, posXPercent, posYPercent, scaleFactor) {
    if (element.parentElement === null) return;
    const container = element.parentElement;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const naturalWidth = element instanceof HTMLImageElement ? element.naturalWidth : element.videoWidth;
    const naturalHeight = element instanceof HTMLImageElement ? element.naturalHeight : element.videoHeight;
    const minScale = Math.max(
      containerWidth / naturalWidth,
      containerHeight / naturalHeight
    );
    const scale = Math.max(minScale, minScale * scaleFactor);
    const scaledWidth = naturalWidth * scale;
    const scaledHeight = naturalHeight * scale;
    const maxOffsetX = (scaledWidth - containerWidth) / 2;
    const maxOffsetY = (scaledHeight - containerHeight) / 2;
    const offsetX = (posXPercent - 50) / 50 * maxOffsetX;
    const offsetY = (posYPercent - 50) / 50 * maxOffsetY;
    element.style.width = `${scaledWidth}px`;
    element.style.height = `${scaledHeight}px`;
    element.style.objectFit = "cover";
    element.style.position = "absolute";
    element.style.left = `${containerWidth / 2 - scaledWidth / 2 + offsetX}px`;
    element.style.top = `${containerHeight / 2 - scaledHeight / 2 + offsetY}px`;
  }
  static enableReposition(plugin) {
    if (this.resizeHandler) return;
    this.resizeHandler = () => {
      const media = document.getElementById("live-wallpaper-media");
      if (!media) return;
      if (!plugin.settings.currentWallpaper.Reposition) {
        plugin.applyMediaStyles(media);
        return;
      }
      this.applyImagePosition(
        media,
        plugin.settings.currentWallpaper.positionX ?? 50,
        plugin.settings.currentWallpaper.positionY ?? 50,
        plugin.settings.currentWallpaper.Scale ?? 1
      );
    };
    window.addEventListener("resize", this.resizeHandler);
  }
  static disableReposition() {
    if (!this.resizeHandler) return;
    window.removeEventListener("resize", this.resizeHandler);
    this.resizeHandler = null;
  }
  static SaveSettingsDebounced(plugin) {
    return (0, import_obsidian.debounce)(async () => {
      await plugin.saveSettings();
    }, 300);
  }
  static ApplyWallpaperDebounced(plugin) {
    return (0, import_obsidian.debounce)(async (skipConfigReload = false) => {
      await plugin.applyWallpaper(skipConfigReload);
    }, 300);
  }
};
SettingsUtils.resizeHandler = null;

// src/Scheduler.ts
var Scheduler = class {
  static ValidateText(text) {
    const timePattern = /^(?:[01]?\d|2[0-3])(?::[0-5]\d){1,2}$/;
    return timePattern.test(text);
  }
  static Check(options, exceptKey) {
    const BOOLEAN_KEYS = [
      "dayNightMode",
      "weekly",
      "shuffle"
    ];
    return BOOLEAN_KEYS.some((k) => {
      if (k === exceptKey) return false;
      const val = options[k];
      return val === true || val === "true";
    });
  }
  static getIntervalInMs(options) {
    const timeStr = options.intervalCheckTime ?? "00:10";
    const [hh, mm] = timeStr.split(":").map(Number);
    return (hh * 60 + mm) * 60 * 1e3;
  }
};

// src/WallpaperConfigUtils.ts
var WallpaperConfigUtils = class _WallpaperConfigUtils {
  static async GetCurrentConfig(Plugin2) {
    const Settings = Plugin2.settings;
    const AnyScheduledWallpaperEnabled = Scheduler.Check(Settings.ScheduledOptions);
    if (Settings.Preview) return Plugin2.settings.currentWallpaper;
    else if (AnyScheduledWallpaperEnabled) {
      const index = this.getWallpaperIndex(Plugin2);
      if (Settings.globalConfig.enabled) {
        return _WallpaperConfigUtils.applyGlobalConfig(Settings.WallpaperConfigs[index], Settings.globalConfig.config);
      }
      return Settings.WallpaperConfigs[index];
    }
    if (Settings.globalConfig.enabled) return _WallpaperConfigUtils.applyGlobalConfig(Settings.WallpaperConfigs[0], Settings.globalConfig.config);
    return Settings.WallpaperConfigs[0];
  }
  static getWallpaperIndex(Plugin2) {
    const now = /* @__PURE__ */ new Date();
    const options = Plugin2.settings.ScheduledOptions;
    if (options.dayNightMode) {
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;
      const [dayHour, dayMinute] = options.dayStartTime.split(":").map(Number);
      const [nightHour, nightMinute] = options.nightStartTime.split(":").map(Number);
      const dayTime = dayHour * 60 + dayMinute;
      const nightTime = nightHour * 60 + nightMinute;
      const isDay = dayTime < nightTime ? currentTime >= dayTime && currentTime < nightTime : currentTime >= dayTime || currentTime < nightTime;
      return isDay ? 1 : 2;
    } else if (options.weekly) {
      let day = now.getDay();
      day = (day + 6) % 7 + 1;
      return day + 2;
    }
    return 1;
  }
  static getPaths(slotIndex, Configs) {
    const configs = Configs;
    if (slotIndex >= 1 && slotIndex <= 2) {
      return configs.slice(1, 3).map((cfg) => cfg.path);
    } else {
      return configs.slice(3, 10).map((cfg) => cfg.path);
    }
  }
  static getPathAndType(slotIndex, Configs) {
    const configs = Configs;
    if (slotIndex >= 1 && slotIndex <= 2) {
      return configs.slice(1, 3).map((cfg) => ({ path: cfg.path, type: cfg.type }));
    } else {
      return configs.slice(3, 10).map((cfg) => ({ path: cfg.path, type: cfg.type }));
    }
  }
  static applyGlobalConfig(config, globalConfig) {
    globalConfig.path = config.path;
    globalConfig.type = config.type;
    globalConfig.Index = config.Index;
    return globalConfig;
  }
  static computeActiveSubfolder(slotIndex) {
    if (slotIndex > 2) return "weekly";
    else if (slotIndex != 0) return "daily";
    return "normal";
  }
};

// src/Settings/Settings.ts
var positions = /* @__PURE__ */ new Map([
  [100, "Right"],
  [0, "Left"],
  [50, "Center"]
]);
var SettingsApp = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const setting = new import_obsidian2.Setting(containerEl).setName("Wallpaper source").setDesc("Select an image, GIF, or video file to use as your wallpaper");
    setting.addButton(async (btn) => {
      const pathExists = await SettingsUtils.getPathExists(
        this.plugin,
        this.plugin.settings.currentWallpaper.path
      );
      if (pathExists) {
        btn.setIcon("circle-check").setTooltip("Wallpaper path exists");
      } else {
        btn.setIcon("circle-x").setTooltip("Wallpaper path is missing");
      }
    });
    setting.addButton(
      (btn) => btn.setButtonText("History").setIcon("history").setClass("mod-cta").onClick(async () => {
        containerEl.empty();
        await this.plugin.cleanInvalidWallpaperHistory();
        this.plugin.settings.HistoryPaths.forEach((entry) => {
          new import_obsidian2.Setting(containerEl).setName(entry.fileName).setDesc(entry.path).addButton((button) => {
            button.setButtonText("Select").onClick(async () => {
              this.plugin.settings.currentWallpaper = await WallpaperConfigUtils.GetCurrentConfig(this.plugin);
              const Index = this.plugin.settings.currentWallpaper.Index;
              const pluginId = this.plugin.manifest.id;
              const baseDir = `${this.app.vault.configDir}/plugins/${pluginId}/wallpapers`;
              const sourceFullPath = `${this.app.vault.configDir}/${entry.path}`;
              const ActiveSubFolder = WallpaperConfigUtils.computeActiveSubfolder(Index);
              const targetFullPath = `${baseDir}/active/${ActiveSubFolder}/${entry.fileName}`;
              const exists = await this.app.vault.adapter.exists(targetFullPath);
              if (!exists) {
                try {
                  await this.app.vault.adapter.copy(sourceFullPath, targetFullPath);
                } catch (e) {
                  console.error("Failed to copy wallpaper from history to active folder", e);
                  return;
                }
              }
              const relativeTargetFullPath = targetFullPath.replace(`${this.app.vault.configDir}/`, "");
              const folder = relativeTargetFullPath.substring(0, relativeTargetFullPath.lastIndexOf("/"));
              if (ActiveSubFolder === "normal") {
                await this.plugin.removeAllExcept(folder, relativeTargetFullPath);
              } else {
                const Path = `plugins/${pluginId}/wallpapers/active/${ActiveSubFolder}/${entry.fileName}`;
                await this.plugin.removeFileIfUnused(
                  Path,
                  this.plugin.settings.WallpaperConfigs[Index].path,
                  WallpaperConfigUtils.getPaths(Index, this.plugin.settings.WallpaperConfigs)
                );
              }
              this.plugin.settings.currentWallpaper.path = `plugins/${pluginId}/wallpapers/active/${ActiveSubFolder}/${entry.fileName}`;
              this.plugin.settings.currentWallpaper.type = entry.type;
              this.plugin.settings.WallpaperConfigs[Index].path = `plugins/${pluginId}/wallpapers/active/${ActiveSubFolder}/${entry.fileName}`;
              this.plugin.settings.WallpaperConfigs[Index].type = entry.type;
              await this.plugin.toggleModalStyles();
              this.plugin.applyWallpaper(true);
              await this.plugin.saveSettings();
              this.display();
            });
          });
        });
      })
    );
    setting.addButton((btn) => {
      btn.setButtonText("Check wallpaper").setIcon("image-file").onClick(async () => {
        const path = await SettingsUtils.getWallpaperPath(this.plugin, this.plugin.settings.currentWallpaper.Index);
        if (!path) {
          new import_obsidian2.Notice("No wallpaper path set.");
          return;
        }
        if (await SettingsUtils.wallpaperExists(this.plugin, path)) {
          new import_obsidian2.Notice("Wallpaper loaded successfully.");
        } else {
          new import_obsidian2.Notice("Wallpaper file not found. Resetting path.");
          this.plugin.settings.currentWallpaper.path = "";
          await this.plugin.saveSettings();
        }
      });
    });
    setting.addButton(
      (btn) => btn.setButtonText("Browse").setIcon("folder-open").setClass("mod-cta").onClick(async () => {
        await this.plugin.openFilePicker(this.plugin.settings.currentWallpaper.Index);
        await this.plugin.toggleModalStyles();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Use global configuration").setDesc("When enabled, all wallpapers will use the global settings instead of individual configurations.").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.globalConfig.enabled).onChange(async (value) => {
        const media = document.getElementById("live-wallpaper-media");
        this.plugin.settings.globalConfig.enabled = value;
        this.plugin.settings.Preview = false;
        this.plugin.settings.currentWallpaper = await WallpaperConfigUtils.GetCurrentConfig(this.plugin);
        await this.plugin.toggleModalStyles();
        this.plugin.applyMediaStyles(media);
        this.plugin.applyWallpaper();
        await this.plugin.saveSettings();
        this.display();
      });
    });
    if (!this.plugin.settings.globalConfig.enabled) {
      const Preview = new import_obsidian2.Setting(containerEl).setName("Wallpaper preview").setDesc("Preview and test specific wallpaper schedules below.");
      Preview.addDropdown((dropdown) => {
        const MODAL_EFFECTS = {
          "0": "No Schedule",
          "1": "Day",
          "2": "Night",
          "3": "Monday",
          "4": "Tuesday",
          "5": "Wednesday",
          "6": "Thursday",
          "7": "Friday",
          "8": "Saturday",
          "9": "Sunday"
        };
        dropdown.addOptions(MODAL_EFFECTS).setValue(this.plugin.settings.Preview ? this.plugin.settings.currentWallpaper.Index.toString() : "X").onChange(async (value) => {
          const index = parseInt(value, 10);
          const targetConfig = this.plugin.settings.WallpaperConfigs[index];
          if (targetConfig) {
            this.plugin.settings.currentWallpaper = targetConfig;
            this.plugin.settings.Preview = true;
            await this.plugin.toggleModalStyles();
            this.plugin.applyWallpaper();
            new import_obsidian2.Notice(`Previewing wallpaper for ${MODAL_EFFECTS[value]}`);
            await this.plugin.saveSettings();
            this.display();
          }
        });
      });
      Preview.addButton((button) => {
        button.setButtonText("Turn off preview").setIcon("eye-off").onClick(async () => {
          const currentConfig = await WallpaperConfigUtils.GetCurrentConfig(this.plugin);
          if (currentConfig) {
            this.plugin.settings.currentWallpaper = { ...currentConfig };
            this.plugin.settings.Preview = false;
            await this.plugin.toggleModalStyles();
            this.plugin.applyWallpaper();
            new import_obsidian2.Notice("Preview turned off restored scheduled wallpaper.");
            await this.plugin.saveSettings();
            this.display();
          }
        });
      });
    }
    new import_obsidian2.Setting(containerEl).setName("Use full-resolution wallpapers").setDesc("Keeps the original image size. To apply, add the wallpaper again.").addToggle((Toggle) => {
      Toggle.setValue(this.plugin.settings.currentWallpaper.Quality).onChange(async (value) => {
        this.plugin.settings.currentWallpaper.Quality = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Limit wallpaper size").setDesc("Enable to restrict wallpapers to a maximum size (currently 12 MB). Disable for unlimited size.").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.SizeLimited).onChange(async (value) => {
        this.plugin.settings.SizeLimited = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Enable reposition").setDesc("Toggle to adjust the wallpaper's position and scale.").addToggle((Toggle) => {
      Toggle.setValue(this.plugin.settings.currentWallpaper.Reposition).onChange(async (value) => {
        const media = document.getElementById("live-wallpaper-media");
        this.plugin.settings.currentWallpaper.Reposition = value;
        await this.plugin.saveSettings();
        if (value) {
          SettingsUtils.enableReposition(this.plugin);
          SettingsUtils.applyImagePosition(media, this.plugin.settings.currentWallpaper.positionX, this.plugin.settings.currentWallpaper.positionY, this.plugin.settings.currentWallpaper.Scale);
        } else {
          SettingsUtils.disableReposition();
          this.plugin.applyMediaStyles(media);
        }
        this.display();
      });
    });
    if (this.plugin.settings.currentWallpaper.Reposition) {
      new import_obsidian2.Setting(containerEl).setName("Horizontal position").setDesc("Adjust the horizontal position of the wallpaper.").addSlider((slider) => {
        slider.setLimits(0, 100, 1).setValue(this.plugin.settings.currentWallpaper.positionX).setDynamicTooltip().setInstant(true).onChange(async (value) => {
          const media = document.getElementById("live-wallpaper-media");
          this.plugin.settings.currentWallpaper.positionX = value;
          this.plugin.debouncedSave();
          if (media) {
            SettingsUtils.applyImagePosition(media, this.plugin.settings.currentWallpaper.positionX, this.plugin.settings.currentWallpaper.positionY, this.plugin.settings.currentWallpaper.Scale);
          }
        });
      });
      new import_obsidian2.Setting(containerEl).setName("Vertical position").setDesc("Adjust the vertical position of the wallpaper.").addSlider((slider) => {
        slider.setLimits(0, 100, 1).setValue(this.plugin.settings.currentWallpaper.positionY).setDynamicTooltip().setInstant(true).onChange(async (value) => {
          const media = document.getElementById("live-wallpaper-media");
          this.plugin.settings.currentWallpaper.positionY = value;
          this.plugin.debouncedSave();
          if (media) {
            SettingsUtils.applyImagePosition(media, this.plugin.settings.currentWallpaper.positionX, this.plugin.settings.currentWallpaper.positionY, this.plugin.settings.currentWallpaper.Scale);
          }
        });
      });
      new import_obsidian2.Setting(containerEl).setName("Image scale").setDesc("Adjust the size of the wallpaper.").addSlider((slider) => {
        slider.setLimits(0.5, 2, 0.1).setValue(this.plugin.settings.currentWallpaper.Scale ?? 1).setDynamicTooltip().setInstant(true).onChange(async (value) => {
          const media = document.getElementById("live-wallpaper-media");
          this.plugin.settings.currentWallpaper.Scale = value;
          this.plugin.debouncedSave();
          if (media) {
            SettingsUtils.applyImagePosition(media, this.plugin.settings.currentWallpaper.positionX, this.plugin.settings.currentWallpaper.positionY, this.plugin.settings.currentWallpaper.Scale);
          }
        });
      });
      new import_obsidian2.Setting(containerEl).setName("Image position").setDesc("Adjust the image alignment when the main focus is off-center.").addDropdown((dropdown) => {
        positions.forEach((label, key) => {
          dropdown.addOption(key.toString(), label);
        });
        dropdown.setValue(this.plugin.settings.currentWallpaper.position).onChange(async (value) => {
          const media = document.getElementById("live-wallpaper-media");
          this.plugin.settings.currentWallpaper.position = value;
          this.plugin.debouncedSave();
          if (media) {
            this.plugin.settings.currentWallpaper.positionX = Number.parseInt(value);
            SettingsUtils.applyImagePosition(media, this.plugin.settings.currentWallpaper.positionX, this.plugin.settings.currentWallpaper.positionY, this.plugin.settings.currentWallpaper.Scale);
            this.display();
          }
        });
      });
    } else {
      new import_obsidian2.Setting(containerEl).setName("Disable image cover").setDesc("Toggle this option to turn off object-fit: cover for the image.").addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.currentWallpaper.useObjectFit).onChange(async (value) => {
          const media = document.getElementById("live-wallpaper-media");
          this.plugin.settings.currentWallpaper.useObjectFit = value;
          this.plugin.debouncedSave();
          if (media) {
            Object.assign(media.style, {
              objectFit: this.plugin.settings.currentWallpaper.useObjectFit ? "unset" : "cover"
            });
          }
        });
      });
    }
    new import_obsidian2.Setting(containerEl).setName("Wallpaper opacity").setDesc(
      "Controls the transparency level of the wallpaper (0% = fully transparent, 100% = fully visible)"
    ).addSlider((slider) => {
      const valueEl = containerEl.createEl("span", {
        text: ` ${this.plugin.settings.currentWallpaper.opacity}%`,
        cls: "setting-item-description"
      });
      const initialValue = this.plugin.settings.AdnvOpend ? 100 : this.plugin.settings.currentWallpaper.opacity;
      if (this.plugin.settings.AdnvOpend) {
        slider.setDisabled(true);
        valueEl.textContent = ` 100%`;
      }
      slider.setLimits(0, 80, 1).setValue(initialValue).setDisabled(this.plugin.settings.AdnvOpend).setDynamicTooltip().setInstant(true).onChange(async (v) => {
        if (!this.plugin.settings.AdnvOpend) {
          this.plugin.settings.currentWallpaper.opacity = v;
          valueEl.textContent = ` ${v}%`;
          this.plugin.debouncedApplyWallpaper();
          this.plugin.debouncedSave();
        }
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Blur radius").setDesc("Applies a blur effect to the wallpaper in pixels").addSlider((slider) => {
      const valueEl = containerEl.createEl("span", {
        text: ` ${this.plugin.settings.currentWallpaper.blurRadius}px`,
        cls: "setting-item-description"
      });
      slider.setInstant(true).setLimits(0, 20, 1).setValue(this.plugin.settings.currentWallpaper.blurRadius).onChange(async (v) => {
        this.plugin.settings.currentWallpaper.blurRadius = v;
        valueEl.textContent = ` ${v}px`;
        this.plugin.debouncedApplyWallpaper();
        this.plugin.debouncedSave();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Brightness").setDesc("Adjusts the wallpaper brightness (100% = normal)").addSlider((slider) => {
      const valueEl = containerEl.createEl("span", {
        text: ` ${this.plugin.settings.currentWallpaper.brightness}%`,
        cls: "setting-item-description"
      });
      slider.setInstant(true).setLimits(20, 130, 1).setValue(this.plugin.settings.currentWallpaper.brightness).onChange(async (v) => {
        this.plugin.settings.currentWallpaper.brightness = v;
        valueEl.textContent = ` ${v}%`;
        this.plugin.debouncedApplyWallpaper();
        this.plugin.debouncedSave();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Contrast").setDesc("Controls the wallpaper contrast intensity 100% represents the original image").addSlider((slider) => {
      const valueEl = containerEl.createEl("span", {
        text: ` ${this.plugin.settings.currentWallpaper.contrast}%`,
        cls: "setting-item-description"
      });
      slider.setInstant(true).setLimits(0, 200, 1).setValue(this.plugin.settings.currentWallpaper.contrast).onChange(async (v) => {
        this.plugin.settings.currentWallpaper.contrast = v;
        valueEl.textContent = ` ${v}%`;
        this.plugin.debouncedApplyWallpaper();
        this.plugin.debouncedSave();
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Layer position (z\u2011index)").setDesc(
      "Determines the stacking order: higher values bring the wallpaper closer to the front"
    ).addSlider((slider) => {
      const valueEl = containerEl.createEl("span", {
        text: ` ${this.plugin.settings.currentWallpaper.zIndex}`,
        cls: "setting-item-description"
      });
      slider.setInstant(true).setLimits(-10, 100, 1).setValue(this.plugin.settings.currentWallpaper.zIndex).setDisabled(this.plugin.settings.AdnvOpend).onChange(async (v) => {
        if (!this.plugin.settings.AdnvOpend) {
          this.plugin.settings.currentWallpaper.zIndex = v;
          valueEl.textContent = ` ${v}`;
          this.plugin.debouncedApplyWallpaper();
          this.plugin.debouncedSave();
        }
      });
    });
    new import_obsidian2.Setting(containerEl).setName("Change playback speed").setDesc(
      "Adjust the playback speed for videos (0.25x \u2013 2x). This does not affect GIFs."
    ).addSlider((slider) => {
      const valueEl = containerEl.createSpan({
        text: `${this.plugin.settings.currentWallpaper.playbackSpeed.toFixed(2)}x`,
        cls: "setting-item-description"
      });
      slider.setInstant(true).setLimits(0.25, 2, 0.25).setValue(this.plugin.settings.currentWallpaper.playbackSpeed).onChange(async (val) => {
        this.plugin.settings.currentWallpaper.playbackSpeed = val;
        this.plugin.debouncedApplyWallpaper();
        this.plugin.debouncedSave();
        valueEl.setText(`${val.toFixed(2)}x`);
      });
    });
    if (import_obsidian2.Platform.isMobileApp) {
      const desc = document.createElement("div");
      desc.textContent = "On mobile devices, zooming can affect background size. You can manually set the height and width to maintain consistency.";
      containerEl.appendChild(desc);
      new import_obsidian2.Setting(containerEl).setName("Background width").setDesc(
        "Set a custom width for the background on mobile (e.g., 100vw or 500px)."
      ).addText(
        (text) => text.setPlaceholder("e.g., 100vw").setValue(this.plugin.settings.mobileBackgroundWidth || "").onChange(async (value) => {
          this.plugin.settings.mobileBackgroundWidth = value;
          await this.plugin.saveSettings();
          this.plugin.ChangeWallpaperContainer();
        })
      );
      new import_obsidian2.Setting(containerEl).setName("Background height").setDesc(
        "Set a custom height for the background on mobile (e.g., 100vh or 800px)."
      ).addText(
        (text) => text.setPlaceholder("e.g., 100vh").setValue(this.plugin.settings.mobileBackgroundHeight || "").onChange(async (value) => {
          this.plugin.settings.mobileBackgroundHeight = value;
          await this.plugin.saveSettings();
          this.plugin.ChangeWallpaperContainer();
        })
      );
      new import_obsidian2.Setting(containerEl).setName("Match screen size").setDesc(
        "Automatically set the background size to match your device's screen dimensions."
      ).addButton(
        (button) => button.setButtonText("Resize to screen").onClick(async () => {
          this.plugin.settings.mobileBackgroundHeight = window.innerHeight.toString() + "px";
          this.plugin.settings.mobileBackgroundWidth = window.innerWidth.toString() + "px";
          this.plugin.ChangeWallpaperContainer();
          await this.plugin.saveSettings();
          this.display();
        })
      );
    }
    new import_obsidian2.Setting(containerEl).setName("Reset options").setDesc("Resets all settings").addButton(
      (Button) => Button.setButtonText("Reset").onClick(async () => {
        const defaults = DEFAULT_SETTINGS;
        this.plugin.settings.currentWallpaper.path = defaults.currentWallpaper.path;
        this.plugin.settings.currentWallpaper.type = defaults.currentWallpaper.type;
        this.plugin.settings.HistoryPaths = defaults.HistoryPaths;
        this.plugin.settings.currentWallpaper.playbackSpeed = defaults.currentWallpaper.playbackSpeed;
        this.plugin.settings.currentWallpaper.opacity = defaults.currentWallpaper.opacity;
        this.plugin.settings.currentWallpaper.zIndex = defaults.currentWallpaper.zIndex;
        this.plugin.settings.currentWallpaper.blurRadius = defaults.currentWallpaper.blurRadius;
        this.plugin.settings.currentWallpaper.brightness = defaults.currentWallpaper.brightness;
        this.plugin.settings.currentWallpaper.contrast = defaults.currentWallpaper.contrast;
        this.plugin.settings.mobileBackgroundHeight = defaults.mobileBackgroundHeight;
        this.plugin.settings.mobileBackgroundWidth = defaults.mobileBackgroundWidth;
        await this.plugin.saveSettings();
        this.plugin.applyWallpaper();
        this.display();
      })
    );
  }
};

// src/Settings/ScheduledWallpaperSettings.ts
var import_obsidian3 = require("obsidian");
var ScheduledApp = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian3.Setting(containerEl).setName("Day and night mode").setDesc("Enable different wallpapers for day and night").addToggle(
      (toggle) => toggle.setValue(
        this.plugin.settings.ScheduledOptions.dayNightMode
      ).onChange(async (value) => {
        const otherEnabled = Scheduler.Check(
          this.plugin.settings.ScheduledOptions,
          "dayNightMode"
        );
        if (value && otherEnabled) {
          new import_obsidian3.Notice("Only one mode can be enabled at a time.");
          toggle.setValue(false);
          return;
        }
        this.plugin.settings.ScheduledOptions.dayNightMode = value;
        this.plugin.settings.currentWallpaper = await WallpaperConfigUtils.GetCurrentConfig(this.plugin);
        await this.plugin.saveSettings();
        this.display();
        this.plugin.applyWallpaper();
      })
    );
    if (this.plugin.settings.ScheduledOptions.dayNightMode) {
      const paths = WallpaperConfigUtils.getPaths(this.plugin.settings.currentWallpaper.Index, this.plugin.settings.WallpaperConfigs);
      if (!paths[0]) paths[0] = "";
      if (!paths[1]) paths[1] = "";
      new import_obsidian3.Setting(containerEl).setName("Day Wallpaper").setDesc("Wallpaper to use during the day").addButton(
        (btn) => btn.setIcon("folder-open").setTooltip("Browse for file").onClick(() => this.plugin.openFilePicker(1, true))
      );
      new import_obsidian3.Setting(containerEl).setName("Night Wallpaper").setDesc("Wallpaper to use at night").addButton(
        (btn) => btn.setIcon("folder-open").setTooltip("Browse for file").onClick(() => this.plugin.openFilePicker(2, true))
      );
      let dayTimeValue = this.plugin.settings.ScheduledOptions.dayStartTime;
      let nightTimeValue = this.plugin.settings.ScheduledOptions.nightStartTime;
      const Time = new import_obsidian3.Setting(containerEl).setName("Time").setDesc("Enter time in HH:MM format (e.g., 23:54)");
      Time.addText((area) => {
        area.setPlaceholder("HH:MM").setValue(this.plugin.settings.ScheduledOptions.dayStartTime ?? "").onChange((value) => {
          dayTimeValue = value;
        });
      });
      Time.addText((area) => {
        area.setPlaceholder("HH:MM").setValue(this.plugin.settings.ScheduledOptions.nightStartTime ?? "").onChange((value) => {
          nightTimeValue = value;
        });
      });
      new import_obsidian3.Setting(containerEl).addButton(
        (btn) => btn.setButtonText("Apply now").setCta().onClick(async () => {
          if (Scheduler.ValidateText(dayTimeValue) && Scheduler.ValidateText(nightTimeValue)) {
            this.plugin.settings.ScheduledOptions.dayStartTime = dayTimeValue;
            this.plugin.settings.ScheduledOptions.nightStartTime = nightTimeValue;
            await this.plugin.saveSettings();
            new import_obsidian3.Notice("Wallpaper schedule has been set.");
            this.plugin.applyWallpaper();
          } else {
            new import_obsidian3.Notice(
              "One or both time values are invalid. Use HH:MM format."
            );
          }
        })
      );
      new import_obsidian3.Setting(containerEl).setName("Check day and night wallpapers").setDesc(
        "Check whether the paths to the day and night wallpapers are set and whether the files exist."
      ).addButton(async (btn) => {
        btn.setButtonText("Check").onClick(async () => {
          const dayPath = this.plugin.settings.WallpaperConfigs[1].path;
          const nightPath = this.plugin.settings.WallpaperConfigs[2].path;
          const dayExists = dayPath ? await SettingsUtils.getPathExists(this.plugin, dayPath) : false;
          const nightExists = nightPath ? await SettingsUtils.getPathExists(this.plugin, nightPath) : false;
          if (dayExists && nightExists) {
            new import_obsidian3.Notice("Both wallpapers (day and night) are set and exist.");
          } else if (!dayExists && !nightExists) {
            new import_obsidian3.Notice("Both wallpapers are missing: day and night.");
          } else if (!dayExists) {
            new import_obsidian3.Notice("The day wallpaper is not set or does not exist.");
          } else {
            new import_obsidian3.Notice("The night wallpaper is not set or does not exist.");
          }
        });
      });
    }
    new import_obsidian3.Setting(containerEl).setName("Weekly mode").setDesc("Enable different wallpapers for any day").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.ScheduledOptions.weekly).onChange(async (value) => {
        const otherEnabled = Scheduler.Check(
          this.plugin.settings.ScheduledOptions,
          "weekly"
        );
        if (value && otherEnabled) {
          new import_obsidian3.Notice("Only one mode can be enabled at a time.");
          toggle.setValue(false);
          return;
        }
        this.plugin.settings.ScheduledOptions.weekly = value;
        this.plugin.settings.currentWallpaper = await WallpaperConfigUtils.GetCurrentConfig(this.plugin);
        await this.plugin.saveSettings();
        this.display();
        this.plugin.applyWallpaper();
      })
    );
    if (this.plugin.settings.ScheduledOptions.weekly) {
      const paths = WallpaperConfigUtils.getPaths(this.plugin.settings.currentWallpaper.Index, this.plugin.settings.WallpaperConfigs);
      let selectedDay = "Monday";
      const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];
      daysOfWeek.forEach((_, index) => {
        if (!paths[index]) {
          paths[index] = "";
        }
      });
      new import_obsidian3.Setting(containerEl).setName("Day Wallpaper").setDesc("Wallpaper to use during the day").addButton(
        (btn) => btn.setIcon("folder-open").setTooltip("Browse for file").onClick(() => {
          const index = daysOfWeek.indexOf(selectedDay);
          if (index !== -1) {
            this.plugin.openFilePicker(index + 3, true);
          } else {
            console.warn("Invalid day selected");
          }
        })
      ).addDropdown((dropdown) => {
        daysOfWeek.forEach((day) => {
          dropdown.addOption(day, day);
        });
        dropdown.setValue(selectedDay);
        dropdown.onChange((value) => {
          selectedDay = value;
        });
      });
      new import_obsidian3.Setting(containerEl).setName("Check weekly wallpapers").setDesc(
        "Check if the paths for the weekly wallpapers are set and if the files exist."
      ).addButton((btn) => {
        btn.setButtonText("Check").onClick(async () => {
          const missingDays = [];
          for (let i = 0; i < paths.length; i++) {
            const pathExists = await SettingsUtils.getPathExists(this.plugin, paths[i]);
            if (!pathExists) {
              missingDays.push(daysOfWeek[i]);
            }
          }
          if (missingDays.length > 0) {
            new import_obsidian3.Notice(`Missing wallpapers for: ${missingDays.join(", ")}`);
          } else {
            new import_obsidian3.Notice("All weekly wallpapers are loaded.");
          }
        });
      });
    }
    const WALLPAPER_INTERVALS = {
      "00:01": "Every 1 minute",
      "00:05": "Every 5 minutes",
      "00:10": "Every 10 minutes",
      "00:30": "Every 30 minutes",
      "01:00": "Every 1 hour",
      "custom": "Custom interval"
    };
    const currentInterval = this.plugin.settings.ScheduledOptions.intervalCheckTime ?? "00:10";
    new import_obsidian3.Setting(containerEl).setName("Wallpaper change interval").setDesc("How often the wallpaper should be checked and changed").addDropdown((dropdown) => {
      dropdown.addOptions(WALLPAPER_INTERVALS);
      dropdown.setValue(this.plugin.settings.ScheduledOptions.isCustomInterval ? "custom" : currentInterval);
      dropdown.onChange(async (value) => {
        if (value !== "custom") {
          this.plugin.settings.ScheduledOptions.intervalCheckTime = value;
          this.plugin.settings.ScheduledOptions.isCustomInterval = false;
          await this.plugin.saveSettings();
          this.plugin.startDayNightWatcher();
          this.display();
        } else {
          this.plugin.settings.ScheduledOptions.intervalCheckTime = "00:42";
          this.plugin.settings.ScheduledOptions.isCustomInterval = true;
          await this.plugin.saveSettings();
          this.display();
        }
      });
    });
    if (this.plugin.settings.ScheduledOptions.isCustomInterval) {
      let customValue = currentInterval;
      new import_obsidian3.Setting(containerEl).setName("Custom interval").setDesc("Enter time in HH:MM format (e.g., 00:42)").addText((text) => {
        text.setPlaceholder("HH:MM").setValue(currentInterval).onChange((value) => {
          customValue = value;
        });
      });
      new import_obsidian3.Setting(containerEl).addButton(
        (btn) => btn.setButtonText("Apply custom interval").setCta().onClick(async () => {
          if (!Scheduler.ValidateText(customValue)) {
            new import_obsidian3.Notice("Invalid format. Use HH:MM.");
            return;
          }
          this.plugin.settings.ScheduledOptions.intervalCheckTime = customValue;
          await this.plugin.saveSettings();
          this.plugin.startDayNightWatcher();
          new import_obsidian3.Notice("Custom interval applied.");
        })
      );
    }
  }
};

// src/Settings/TransparencySettings.ts
var import_obsidian4 = require("obsidian");
var TransparencySettingsTab = class extends import_obsidian4.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const transparencySection = containerEl.createDiv();
    new import_obsidian4.Setting(transparencySection).setName("Transparency options").setHeading();
    new import_obsidian4.Setting(transparencySection).setName(
      "Fine-tune transparency and visual effects to seamlessly integrate your wallpaper. These features allow for deeper customization but may require CSS knowledge."
    );
    const toggleTransparencyButton = transparencySection.createEl("button", {
      text: this.plugin.settings.AdnvOpend ? "Disable transparency settings" : "Enable transparency settings"
    });
    const transparencyOptionsContainer = transparencySection.createDiv();
    transparencyOptionsContainer.style.display = this.plugin.settings.AdnvOpend ? "block" : "none";
    toggleTransparencyButton.onclick = async () => {
      this.plugin.settings.AdnvOpend = !this.plugin.settings.AdnvOpend;
      transparencyOptionsContainer.style.display = this.plugin.settings.AdnvOpend ? "block" : "none";
      toggleTransparencyButton.setText(this.plugin.settings.AdnvOpend ? "Hide transparency options" : "Show transparency options");
      await this.plugin.toggleModalStyles();
      this.plugin.applyWallpaper();
      this.plugin.saveSettings();
      this.display();
    };
    const tableDescription = transparencyOptionsContainer.createEl("p", {
      cls: "transparency-options-description"
    });
    tableDescription.innerHTML = "Define UI elements and CSS attributes that should be made transparent. This allows the wallpaper to appear behind the interface, improving readability and aesthetics. Example attributes you can modify:<br>\u2022 attribute: <code>--background-primary</code><br>\u2022 attribute: <code>--background-secondary</code><br>\u2022 attribute: <code>--background-secondary-alt</code><br>\u2022 attribute: <code>--col-pr-background</code><br>\u2022 attribute: <code>--col-bckg-mainpanels</code><br>\u2022 attribute: <code>--col-txt-titlebars</code><br><br>You can inspect elements and variables using browser dev tools (CTRL + SHIFT + I) to discover more attributes to adjust.";
    const tableContainer = transparencyOptionsContainer.createEl("div", {
      cls: "text-arena-table-container"
    });
    const table = tableContainer.createEl("table", { cls: "text-arena-table" });
    const thead = table.createEl("thead");
    const headerRow = thead.createEl("tr");
    headerRow.createEl("th", { text: "Attribute to modify" });
    this.plugin.settings.TextArenas.forEach((entry, index) => {
      const row = table.createEl("tr");
      new import_obsidian4.Setting(row).addText((text) => {
        text.setValue(entry.attribute).onChange((value) => {
          if (!SettingsUtils.AttributeValid(value)) {
            return;
          }
          this.plugin.RemoveChanges(index);
          this.plugin.settings.TextArenas[index].attribute = value;
          this.plugin.LoadOrUnloadChanges(true);
          this.plugin.saveSettings();
          this.plugin.ApplyChanges(index);
        });
      });
      const actionCell = row.createEl("td");
      new import_obsidian4.Setting(actionCell).addExtraButton((btn) => {
        btn.setIcon("cross").setTooltip("Remove this entry").onClick(() => {
          this.plugin.RemoveChanges(index);
          this.plugin.settings.TextArenas.splice(index, 1);
          this.plugin.LoadOrUnloadChanges(true);
          this.plugin.saveSettings();
          this.display();
        });
      });
    });
    new import_obsidian4.Setting(transparencyOptionsContainer).addButton(
      (btn) => btn.setButtonText("Add new element").setClass("text-arena-center-button").setTooltip("Add a new row to the table").onClick(() => {
        this.plugin.settings.TextArenas.push({ attribute: "" });
        this.display();
      })
    );
    let colorPickerRef = null;
    new import_obsidian4.Setting(transparencyOptionsContainer).setName("Custom background color").setDesc("Set a custom color for the plugin's styling logic").addColorPicker((picker) => {
      colorPickerRef = picker;
      picker.setValue(this.plugin.settings.Color || "#000000").onChange(async (value) => {
        this.plugin.settings.Color = value;
        await this.plugin.saveSettings();
        this.plugin.applyBackgroundColor();
      });
    }).addExtraButton(
      (btn) => btn.setIcon("reset").setTooltip("Reset to default").onClick(async () => {
        this.plugin.settings.Color = "";
        await this.plugin.saveSettings();
        this.plugin.applyBackgroundColor();
        if (colorPickerRef) {
          colorPickerRef.setValue("#000000");
        }
      })
    );
    if (import_obsidian4.Platform.isDesktop) {
      new import_obsidian4.Setting(transparencyOptionsContainer).setName("Modal background effect").setDesc("Choose how the modal background is styled when transparency options are enabled").addDropdown((dropdown) => {
        const MODAL_EFFECTS = {
          none: "No effect",
          blur: "Apply blur effect",
          dim: "Dim the background",
          "blur+dim": "Apply both blur and dim effects"
        };
        dropdown.addOptions(MODAL_EFFECTS).setValue(this.plugin.settings.modalStyle.effect).onChange(async (value) => {
          this.plugin.settings.modalStyle.effect = value;
          await this.plugin.saveSettings();
          this.plugin.toggleModalStyles();
        });
      });
      new import_obsidian4.Setting(transparencyOptionsContainer).setName("Modal blur radius").setDesc("Adjust the blur intensity applied to the modal background").addSlider((slider) => {
        slider.setValue(this.plugin.settings.modalStyle.blurRadius).setLimits(0, 30, 1).setInstant(true).setDynamicTooltip().onChange(async (value) => {
          this.plugin.settings.modalStyle.blurRadius = value;
          await this.plugin.toggleModalStyles();
          this.plugin.debouncedSave();
        });
      });
      new import_obsidian4.Setting(transparencyOptionsContainer).setName("Modal dim opacity").setDesc("Adjust the darkness level applied to the modal background").addSlider((slider) => {
        slider.setValue(this.plugin.settings.modalStyle.dimOpacity * 100).setLimits(0, 100, 5).setInstant(true).setDynamicTooltip().onChange(async (value) => {
          this.plugin.settings.modalStyle.dimOpacity = value / 100;
          await this.plugin.toggleModalStyles();
          this.plugin.debouncedSave();
        });
      });
      new import_obsidian4.Setting(transparencyOptionsContainer).setName("Modal dim color").setDesc("Choose whether the modal background dim is black or white").addDropdown((dropdown) => {
        dropdown.addOption("black", "Black").addOption("white", "White").setValue(this.plugin.settings.modalStyle.dimColor).onChange(async (value) => {
          this.plugin.settings.modalStyle.dimColor = value;
          await this.plugin.toggleModalStyles();
          this.plugin.debouncedSave();
        });
      });
      new import_obsidian4.Setting(transparencyOptionsContainer).setName("Disable modal background").setDesc("Turns off the default modal background dim").addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.modalStyle.disableModalBg).onChange(async (value) => {
          this.plugin.settings.modalStyle.disableModalBg = value;
          await this.plugin.toggleModalStyles();
          this.plugin.debouncedSave();
        });
      });
      new import_obsidian4.Setting(transparencyOptionsContainer).setName("Reset modal settings").setDesc("Restore default blur and dim opacity for the modal background").addButton(
        (btn) => btn.setIcon("reset").setTooltip("Reset modal styles to default").onClick(async () => {
          const defaults = DEFAULT_SETTINGS;
          this.plugin.settings.modalStyle = { ...defaults.modalStyle };
          await this.plugin.toggleModalStyles();
          this.plugin.debouncedSave();
          this.display();
        })
      );
    }
  }
};

// src/Settings/SettingsManager.ts
var LiveWallpaperSettingManager = class extends import_obsidian5.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.regularTab = new SettingsApp(app, plugin);
    this.scheduledTab = new ScheduledApp(app, plugin);
    this.transparencyTab = new TransparencySettingsTab(app, plugin);
    this.activeTab = "regular";
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const navContainer = containerEl.createDiv({
      cls: "live-wallpaper-settings-nav"
    });
    new import_obsidian5.Setting(navContainer).addButton((button) => {
      button.setButtonText("General settings").setClass(this.activeTab === "regular" ? "mod-cta" : "mod-off").onClick(() => {
        this.activeTab = "regular";
        this.display();
      });
    }).addButton((button) => {
      button.setButtonText("Scheduled themes").setClass(this.activeTab === "dynamic" ? "mod-cta" : "mod-off").onClick(() => {
        this.activeTab = "dynamic";
        this.display();
      });
    }).addButton((button) => {
      button.setButtonText("Transparency settings").setClass(this.activeTab === "transparency" ? "mod-cta" : "mod-off").onClick(() => {
        this.activeTab = "transparency";
        this.display();
      });
    });
    const contentContainer = containerEl.createDiv({
      cls: "live-wallpaper-settings-content"
    });
    if (this.activeTab === "regular") {
      this.regularTab.containerEl = contentContainer;
      this.regularTab.display();
    } else if (this.activeTab === "transparency") {
      this.transparencyTab.containerEl = contentContainer;
      this.transparencyTab.display();
    } else {
      this.scheduledTab.containerEl = contentContainer;
      this.scheduledTab.display();
    }
  }
};

// src/main.ts
var defaultWallpaper = {
  path: "",
  type: "image",
  zIndex: 5,
  opacity: 40,
  brightness: 100,
  blurRadius: 8,
  contrast: 100,
  playbackSpeed: 1,
  Reposition: false,
  Quality: false,
  useObjectFit: true,
  position: "Center",
  positionX: 50,
  positionY: 50,
  Scale: 1,
  Index: 0
};
var DEFAULT_SETTINGS = {
  LatestVersion: "1.5.4",
  currentWallpaper: defaultWallpaper,
  globalConfig: {
    config: defaultWallpaper,
    enabled: true
  },
  Preview: false,
  WallpaperConfigs: Array.from({ length: 10 }, (_, i) => ({ ...defaultWallpaper, Index: i })),
  HistoryPaths: [],
  mobileBackgroundWidth: "100vw",
  mobileBackgroundHeight: "100vh",
  AdnvOpend: false,
  modalStyle: {
    effect: "blur+dim",
    blurRadius: 10,
    dimOpacity: 0.7,
    dimColor: "black",
    disableModalBg: false
  },
  TextArenas: [
    { attribute: "" }
  ],
  Color: "#000000",
  INBUILD: false,
  SizeLimited: true,
  ScheduledOptions: {
    dayNightMode: false,
    weekly: false,
    shuffle: false,
    dayStartTime: "08:00",
    nightStartTime: "20:00",
    intervalCheckTime: "00:10",
    isCustomInterval: false
  },
  migrated: false
};
var LiveWallpaperPlugin3 = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.lastPath = null;
    this.lastType = null;
    this.resizeRegistered = false;
    this.debouncedSave = SettingsUtils.SaveSettingsDebounced(this);
    this.debouncedApplyWallpaper = SettingsUtils.ApplyWallpaperDebounced(this);
  }
  async onload() {
    await this.loadSettings();
    await this.ensureWallpaperFolderExists();
    if (this.isVersionLess(this.settings.LatestVersion, "1.5.1")) {
      await this.migrateOldSettings();
      this.settings.LatestVersion = "1.5.4";
      await this.saveSettings();
    }
    const anyOptionEnabled = Scheduler.Check(this.settings.ScheduledOptions);
    this.settings.currentWallpaper = await WallpaperConfigUtils.GetCurrentConfig(this);
    this.addSettingTab(new LiveWallpaperSettingManager(this.app, this));
    this.ChangeWallpaperContainer();
    this.removeExistingWallpaperElements();
    this.toggleModalStyles();
    const newContainer = this.createWallpaperContainer();
    const appContainer = document.querySelector(".app-container");
    if (appContainer) appContainer.insertAdjacentElement("beforebegin", newContainer);
    else document.body.appendChild(newContainer);
    document.body.classList.add("live-wallpaper-active");
    if (anyOptionEnabled) {
      this.startDayNightWatcher();
    }
    this.applyWallpaper(false);
    this.registerEvent(
      this.app.workspace.on("css-change", () => {
        const el = document.getElementById("live-wallpaper-container");
        if (el) this.applyWallpaper(anyOptionEnabled);
      })
    );
    await this.applyBackgroundColor();
    if (this.settings.currentWallpaper.Reposition) {
      SettingsUtils.enableReposition(this);
      const media = document.getElementById("live-wallpaper-media");
      if (media && media.parentElement) {
        const reposition = () => {
          SettingsUtils.applyImagePosition(media, this.settings.currentWallpaper.positionX, this.settings.currentWallpaper.positionY, this.settings.currentWallpaper.Scale);
        };
        const imageLoadHandler = () => {
          reposition();
          media.removeEventListener("load", imageLoadHandler);
        };
        media.addEventListener("load", imageLoadHandler);
      }
    }
  }
  async unload() {
    await this.clearBackgroundColor();
    this.removeExistingWallpaperElements();
    this.RemoveModalStyles();
    this.stopDayNightWatcher();
    SettingsUtils.disableReposition();
    document.body.classList.remove("live-wallpaper-active");
    await this.LoadOrUnloadChanges(false);
    super.unload();
  }
  async loadSettings() {
    try {
      const loaded = await this.loadData();
      this.settings = { ...DEFAULT_SETTINGS, ...loaded };
    } catch (e) {
      console.error("Live Wallpaper Plugin \u2013 loadSettings error:", e);
      this.settings = { ...DEFAULT_SETTINGS };
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  isVersionLess(current, target) {
    const c = current.split(".").map(Number);
    const t = target.split(".").map(Number);
    for (let i = 0; i < t.length; i++) {
      if ((c[i] || 0) < t[i]) return true;
      if ((c[i] || 0) > t[i]) return false;
    }
    return false;
  }
  async migrateOldSettings() {
    const settings = this.settings;
    const scheduled = settings.scheduledWallpapers;
    if (!scheduled || typeof scheduled !== "object") {
      return;
    }
    if (Array.isArray(scheduled.wallpaperPaths)) {
      const oldPaths = scheduled.wallpaperPaths;
      scheduled.wallpaperDayPaths = [oldPaths[0] ?? "", oldPaths[1] ?? ""];
      scheduled.wallpaperWeekPaths = oldPaths.slice(2, 9);
      delete scheduled.wallpaperPaths;
    }
    if (Array.isArray(scheduled.wallpaperTypes)) {
      const oldTypes = scheduled.wallpaperTypes;
      scheduled.wallpaperDayTypes = [
        this.isValidWallpaperType(oldTypes[0]) ? oldTypes[0] : "image",
        this.isValidWallpaperType(oldTypes[1]) ? oldTypes[1] : "image"
      ];
      scheduled.wallpaperWeekTypes = oldTypes.slice(2, 9).map((t) => t ?? "image");
      delete scheduled.wallpaperTypes;
    }
    const pluginDir = `${this.app.vault.configDir}/plugins/${this.manifest.id}`;
    const oldDir = `${pluginDir}/wallpaper`;
    const exists = await this.app.vault.adapter.exists(oldDir);
    if (exists) {
      const oldFolder = `${this.app.vault.configDir}/plugins/${this.manifest.id}/wallpaper`;
      try {
        await this.app.vault.adapter.rmdir(oldFolder, true);
      } catch (err) {
        console.error("Could not remove old wallpaper folder:", err);
      }
    }
    if (!Array.isArray(this.settings.WallpaperConfigs)) {
      this.settings.WallpaperConfigs = Array.from({ length: 10 }, (_, i) => ({
        ...defaultWallpaper,
        Index: i
      }));
    } else if (this.settings.WallpaperConfigs.length < 10) {
      for (let i = this.settings.WallpaperConfigs.length; i < 10; i++) {
        this.settings.WallpaperConfigs.push({ ...defaultWallpaper, Index: i });
      }
    }
    if (settings.wallpaperPath) {
      const path = settings.wallpaperPath;
      const oldConfig = this.settings.WallpaperConfigs[0] ?? {};
      this.settings.WallpaperConfigs[0] = {
        ...defaultWallpaper,
        ...oldConfig,
        path,
        type: settings.wallpaperType ?? "image",
        zIndex: settings.zIndex ?? defaultWallpaper.zIndex,
        opacity: settings.opacity ?? defaultWallpaper.opacity,
        playbackSpeed: settings.playbackSpeed ?? defaultWallpaper.playbackSpeed,
        Quality: settings.Quality ?? defaultWallpaper.Quality,
        blurRadius: settings.blurRadius ?? defaultWallpaper.blurRadius,
        Reposition: settings.Reposition ?? defaultWallpaper.Reposition,
        positionX: settings.PositionX ?? defaultWallpaper.positionX,
        positionY: settings.PositionY ?? defaultWallpaper.positionY,
        position: settings.Position ?? defaultWallpaper.position,
        Scale: settings.Scale ?? defaultWallpaper.Scale,
        useObjectFit: settings.useObjectFit ?? defaultWallpaper.useObjectFit,
        Index: 0
      };
      this.settings.globalConfig.config = {
        ...defaultWallpaper,
        ...oldConfig,
        path,
        type: settings.wallpaperType ?? "image",
        zIndex: settings.zIndex ?? defaultWallpaper.zIndex,
        opacity: settings.opacity ?? defaultWallpaper.opacity,
        playbackSpeed: settings.playbackSpeed ?? defaultWallpaper.playbackSpeed,
        Quality: settings.Quality ?? defaultWallpaper.Quality,
        blurRadius: settings.blurRadius ?? defaultWallpaper.blurRadius,
        Reposition: settings.Reposition ?? defaultWallpaper.Reposition,
        positionX: settings.PositionX ?? defaultWallpaper.positionX,
        positionY: settings.PositionY ?? defaultWallpaper.positionY,
        position: settings.Position ?? defaultWallpaper.position,
        Scale: settings.Scale ?? defaultWallpaper.Scale,
        useObjectFit: settings.useObjectFit ?? defaultWallpaper.useObjectFit,
        Index: 0
      };
    }
    if (scheduled) {
      if (Array.isArray(scheduled.wallpaperDayPaths)) {
        scheduled.wallpaperDayPaths.forEach((path, i) => {
          const slotIndex = 1 + i;
          if (slotIndex < this.settings.WallpaperConfigs.length) {
            const oldConfig = this.settings.WallpaperConfigs[slotIndex] ?? {};
            this.settings.WallpaperConfigs[slotIndex] = {
              ...defaultWallpaper,
              ...oldConfig,
              path,
              type: scheduled.wallpaperDayTypes?.[i] ?? "image",
              zIndex: settings.zIndex ?? defaultWallpaper.zIndex,
              opacity: settings.opacity ?? defaultWallpaper.opacity,
              playbackSpeed: settings.playbackSpeed ?? defaultWallpaper.playbackSpeed,
              Quality: settings.Quality ?? defaultWallpaper.Quality,
              blurRadius: settings.blurRadius ?? defaultWallpaper.blurRadius,
              Reposition: settings.Reposition ?? defaultWallpaper.Reposition,
              positionX: settings.PositionX ?? defaultWallpaper.positionX,
              positionY: settings.PositionY ?? defaultWallpaper.positionY,
              position: settings.Position ?? defaultWallpaper.position,
              Scale: settings.Scale ?? defaultWallpaper.Scale,
              useObjectFit: settings.useObjectFit ?? defaultWallpaper.useObjectFit,
              Index: slotIndex
            };
          }
        });
      }
      if (Array.isArray(scheduled.wallpaperWeekPaths)) {
        scheduled.wallpaperWeekPaths.forEach((path, i) => {
          const slotIndex = 3 + i;
          if (slotIndex < this.settings.WallpaperConfigs.length) {
            const oldConfig = this.settings.WallpaperConfigs[slotIndex] ?? {};
            this.settings.WallpaperConfigs[slotIndex] = {
              ...defaultWallpaper,
              ...oldConfig,
              path,
              type: scheduled.wallpaperWeekTypes?.[i] ?? "image",
              zIndex: settings.zIndex ?? defaultWallpaper.zIndex,
              opacity: settings.opacity ?? defaultWallpaper.opacity,
              playbackSpeed: settings.playbackSpeed ?? defaultWallpaper.playbackSpeed,
              Quality: settings.Quality ?? defaultWallpaper.Quality,
              blurRadius: settings.blurRadius ?? defaultWallpaper.blurRadius,
              Reposition: settings.Reposition ?? defaultWallpaper.Reposition,
              positionX: settings.PositionX ?? defaultWallpaper.positionX,
              positionY: settings.PositionY ?? defaultWallpaper.positionY,
              position: settings.Position ?? defaultWallpaper.position,
              Scale: settings.Scale ?? defaultWallpaper.Scale,
              useObjectFit: settings.useObjectFit ?? defaultWallpaper.useObjectFit,
              Index: slotIndex
            };
          }
        });
      }
    }
    delete settings.scheduledWallpapers;
    delete settings.scheduled;
    const obsoleteKeys = [
      "wallpaperPath",
      "wallpaperType",
      "playbackSpeed",
      "Quality",
      "Reposition",
      "opacity",
      "zIndex",
      "blurRadius",
      "brightness",
      "PositionX",
      "PositionY",
      "Position",
      "Scale",
      "useObjectFit"
    ];
    for (const key of obsoleteKeys) {
      if (key in settings) {
        delete settings[key];
      }
    }
  }
  isValidWallpaperType(t) {
    return ["image", "video", "gif"].includes(t);
  }
  async applyWallpaper(skipConfigReload = false) {
    try {
      if (!skipConfigReload) {
        this.settings.currentWallpaper = await WallpaperConfigUtils.GetCurrentConfig(this);
      }
    } catch (err) {
      console.error("Error while accessing wallpaper config:", err);
      return;
    }
    if (this.settings.ScheduledOptions.dayNightMode) {
      this.startDayNightWatcher();
    } else {
      this.stopDayNightWatcher();
    }
    if (!this.settings.currentWallpaper || !this.settings.currentWallpaper.path) {
      new import_obsidian6.Notice("No wallpaper path defined, skipping applyWallpaper.");
      return;
    }
    const newPath = this.settings.currentWallpaper.path;
    const newType = this.settings.currentWallpaper.type;
    const container = document.getElementById("live-wallpaper-container");
    let media = document.getElementById("live-wallpaper-media");
    if (container && media) {
      if (this.settings.AdnvOpend) {
        Object.assign(container.style, {
          opacity: `1`,
          zIndex: `0`
        });
      } else {
        Object.assign(container.style, {
          opacity: `${Math.min(this.settings.currentWallpaper.opacity / 100, 0.8)}`,
          zIndex: `${this.settings.currentWallpaper.zIndex}`
        });
      }
      Object.assign(container.style, {
        filter: `blur(${this.settings.currentWallpaper.blurRadius}px) brightness(${this.settings.currentWallpaper.brightness}%) contrast(${this.settings.currentWallpaper.contrast}%)`
      });
      if (media instanceof HTMLVideoElement) {
        media.playbackRate = this.settings.currentWallpaper.playbackSpeed;
      }
      if (newPath !== this.lastPath || newType !== this.lastType) {
        const newMedia2 = await this.createMediaElement();
        if (newMedia2) {
          newMedia2.style.opacity = "0";
          newMedia2.style.transition = "opacity 1s ease-in-out";
          container.appendChild(newMedia2);
          await new Promise((resolve) => requestAnimationFrame(() => resolve()));
          await new Promise((resolve) => setTimeout(resolve, 20));
          const medias = container.querySelectorAll('[id^="live-wallpaper-media"]');
          await this.waitForMediaDimensions(newMedia2);
          medias.forEach((el, i) => {
            if (i < medias.length - 1) {
              const htmlEl = el;
              htmlEl.style.transition = "opacity 1s ease-in-out";
              htmlEl.style.opacity = "0";
              newMedia2.style.opacity = "1";
              setTimeout(() => {
                if (htmlEl.parentElement) {
                  htmlEl.remove();
                }
              }, 3e3);
            }
          });
          media = newMedia2;
          this.lastPath = newPath;
          this.lastType = newType;
        }
      }
      if (this.settings.currentWallpaper.Reposition) {
        await this.waitForMediaDimensions(media);
        SettingsUtils.applyImagePosition(
          media,
          this.settings.currentWallpaper.positionX,
          this.settings.currentWallpaper.positionY,
          this.settings.currentWallpaper.Scale
        );
      }
      return;
    }
    this.removeExistingWallpaperElements();
    const newContainer = this.createWallpaperContainer();
    const newMedia = await this.createMediaElement();
    if (newMedia) {
      newMedia.id = "live-wallpaper-media";
      newContainer.appendChild(newMedia);
    }
    const appContainer = document.querySelector(".app-container");
    if (appContainer) appContainer.insertAdjacentElement("beforebegin", newContainer);
    else document.body.appendChild(newContainer);
    document.body.classList.add("live-wallpaper-active");
    this.lastPath = newPath;
    this.lastType = newType;
    if (this.settings.currentWallpaper.Reposition) {
      await this.waitForMediaDimensions(newMedia);
      SettingsUtils.applyImagePosition(
        newMedia,
        this.settings.currentWallpaper.positionX,
        this.settings.currentWallpaper.positionY,
        this.settings.currentWallpaper.Scale
      );
    }
  }
  async ensureWallpaperFolderExists() {
    try {
      const dir = this.manifest.dir;
      if (!dir) throw new Error("manifest.dir is undefined");
      const wallpaperFolder = `${dir}/wallpaper`;
      return await this.app.vault.adapter.exists(wallpaperFolder);
    } catch (e) {
      console.error("Failed to check wallpaper folder:", e);
      return false;
    }
  }
  async waitForMediaDimensions(element) {
    return new Promise((resolve) => {
      if (element instanceof HTMLImageElement) {
        if (element.complete && element.naturalWidth !== 0) {
          resolve();
        } else {
          element.addEventListener("load", () => resolve(), { once: true });
        }
      } else {
        if (element.readyState >= 1 && element.videoWidth !== 0) {
          resolve();
        } else {
          element.addEventListener("loadedmetadata", () => resolve(), { once: true });
        }
      }
    });
  }
  removeExistingWallpaperElements() {
    const existingContainer = document.getElementById("live-wallpaper-container");
    const existingStyles = document.getElementById("live-wallpaper-overrides");
    const existingTitlebarStyles = document.getElementById("live-wallpaper-titlebar-styles");
    existingContainer?.remove();
    existingStyles?.remove();
    existingTitlebarStyles?.remove();
    document.body.classList.remove("live-wallpaper-active");
  }
  createWallpaperContainer() {
    const container = document.createElement("div");
    container.id = "live-wallpaper-container";
    Object.assign(container.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      pointerEvents: "none",
      filter: `blur(${this.settings.currentWallpaper.blurRadius}px) brightness(${this.settings.currentWallpaper.brightness}%) contrast(${this.settings.currentWallpaper.contrast}%)`
    });
    if (this.settings.AdnvOpend) {
      Object.assign(container.style, {
        opacity: `1`,
        zIndex: `0`
      });
    } else {
      Object.assign(container.style, {
        opacity: `${Math.min(this.settings.currentWallpaper.opacity / 100, 0.8)}`,
        zIndex: `${this.settings.currentWallpaper.zIndex}`
      });
    }
    return container;
  }
  ChangeWallpaperContainer() {
    const container = document.getElementById("live-wallpaper-container");
    if (container == null) return;
    const width = this.settings.mobileBackgroundWidth || "100vw";
    const height = this.settings.mobileBackgroundHeight || "100vh";
    Object.assign(container.style, {
      width,
      height
    });
  }
  async createMediaElement() {
    const isVideo = this.settings.currentWallpaper.type === "video";
    const media = isVideo ? document.createElement("video") : document.createElement("img");
    media.id = "live-wallpaper-media";
    if (media instanceof HTMLImageElement) {
      media.loading = "lazy";
    }
    const path = `${this.app.vault.configDir}/${this.settings.currentWallpaper.path}`;
    const exists = await this.app.vault.adapter.exists(path);
    if (exists) {
      media.src = this.app.vault.adapter.getResourcePath(path);
    } else {
      this.settings.currentWallpaper.path = "";
      return null;
    }
    this.applyMediaStyles(media);
    if (isVideo) {
      media.autoplay = true;
      media.loop = true;
      media.muted = true;
      media.playbackRate = this.settings.currentWallpaper.playbackSpeed;
    }
    return media;
  }
  applyMediaStyles(media) {
    media.removeAttribute("style");
    if (this.settings.currentWallpaper.Reposition) {
      Object.assign(media.style, {
        width: "100%",
        height: "100%",
        objectFit: this.settings.currentWallpaper.useObjectFit ? "unset" : "cover",
        objectPosition: this.settings.currentWallpaper.position,
        position: "absolute"
      });
    } else {
      Object.assign(media.style, {
        width: "100%",
        height: "100%",
        objectFit: this.settings.currentWallpaper.useObjectFit ? "unset" : "cover",
        position: "absolute"
      });
    }
    if (this.settings.currentWallpaper.Quality) {
      Object.assign(media.style, {
        imageRendering: "auto",
        willChange: "transform",
        overflowClipMargin: "unset",
        overflow: "clip"
      });
    }
  }
  async openFilePicker(slotIndex, isScheduledPicker = false) {
    return new Promise((resolve, reject) => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".jpg,.jpeg,.png,.gif,.mp4,.webm,.avif";
      fileInput.multiple = false;
      fileInput.addEventListener("cancel", (event) => {
        resolve();
      });
      fileInput.addEventListener("change", async (event) => {
        const target = event.target;
        if (!target.files || target.files.length === 0) return;
        const file = target.files[0];
        const allowedExtensions = ["jpg", "jpeg", "png", "gif", "mp4", "webm", "avif"];
        const extension = file.name.split(".").pop()?.toLowerCase();
        if (!extension || !allowedExtensions.includes(extension)) {
          alert("Unsupported file type!");
          resolve();
          return;
        }
        if (this.settings.SizeLimited && file.size > 12 * 1024 * 1024) {
          alert("File is too large (max 12MB).");
          resolve();
          return;
        }
        try {
          const baseDir = `${this.app.vault.configDir}/plugins/${this.manifest.id}/wallpapers`;
          const arrayBuffer = await this.getFileArrayBuffer(file);
          const targetSubfolder = WallpaperConfigUtils.computeActiveSubfolder(slotIndex);
          let fileName = file.name;
          if (file.type.startsWith("image/") && this.settings.currentWallpaper.Quality) {
            const dotIndex = fileName.lastIndexOf(".");
            fileName = dotIndex !== -1 ? fileName.slice(0, dotIndex) + "_quality" + fileName.slice(dotIndex) : fileName + "_quality";
          }
          const activeRelPath = await this.saveUnder(baseDir, `active/${targetSubfolder}`, fileName, arrayBuffer);
          const historyRelPath = await this.saveUnder(baseDir, `history`, fileName, arrayBuffer);
          this.prependHistory({ path: historyRelPath, type: this.getWallpaperType(fileName), fileName });
          await this.trimHistory(5);
          if (slotIndex === 0) {
            const folder = activeRelPath.substring(0, activeRelPath.lastIndexOf("/"));
            await this.removeAllExcept(folder, activeRelPath);
          } else {
            await this.removeFileIfUnused(activeRelPath, this.settings.WallpaperConfigs[slotIndex].path, WallpaperConfigUtils.getPaths(slotIndex, this.settings.WallpaperConfigs));
          }
          if (this.settings.Preview && !isScheduledPicker) {
            this.settings.currentWallpaper.path = activeRelPath;
            this.settings.currentWallpaper.type = this.getWallpaperType(fileName);
          }
          if (this.settings.globalConfig.enabled) {
            this.settings.globalConfig.config.path = activeRelPath;
            this.settings.globalConfig.config.type = this.getWallpaperType(fileName);
          }
          this.settings.WallpaperConfigs[slotIndex].path = activeRelPath;
          this.settings.WallpaperConfigs[slotIndex].type = this.getWallpaperType(fileName);
          await this.applyWallpaper();
          this.debouncedSave();
          resolve();
        } catch (error) {
          alert("Could not save the file. Check disk permissions.");
          console.error(error);
          reject(error);
        }
      });
      fileInput.click();
    });
  }
  getWallpaperType(filename) {
    const extension = filename.split(".").pop()?.toLowerCase();
    if (["mp4", "webm"].includes(extension || "")) return "video";
    if (extension === "gif") return "gif";
    return "image";
  }
  async getFileArrayBuffer(file) {
    if (file.type.startsWith("image/")) {
      const blob = await this.resizeImageToBlob(file, this.settings.currentWallpaper.Quality);
      return blob.arrayBuffer();
    }
    return file.arrayBuffer();
  }
  async saveUnder(baseDir, subfolder, fileName, arrayBuffer) {
    const dir = `${baseDir}/${subfolder}`;
    await this.app.vault.adapter.mkdir(dir);
    const fullPath = `${dir}/${fileName}`;
    await this.app.vault.adapter.writeBinary(fullPath, arrayBuffer);
    return `plugins/${this.manifest.id}/wallpapers/${subfolder}/${fileName}`;
  }
  prependHistory(entry) {
    this.settings.HistoryPaths = [
      entry,
      ...this.settings.HistoryPaths.filter((e) => e.path !== entry.path)
    ];
  }
  async trimHistory(max) {
    const over = this.settings.HistoryPaths.length - max;
    if (over > 0) {
      const toRemove = this.settings.HistoryPaths.slice(max);
      this.settings.HistoryPaths = this.settings.HistoryPaths.slice(0, max);
      for (const e of toRemove) {
        const full = `${this.app.vault.configDir}/${e.path}`;
        await this.app.vault.adapter.remove(full).catch(() => {
        });
      }
    }
  }
  async removeFileIfUnused(newPath, oldPath, allPaths) {
    if (!oldPath) return;
    if (newPath === oldPath) return;
    const occurrences = allPaths.filter((path) => path === oldPath).length;
    if (occurrences <= 1) {
      const fullPath = `${this.app.vault.configDir}/${oldPath}`;
      await this.app.vault.adapter.remove(fullPath).catch(() => {
      });
    }
  }
  async removeAllExcept(dirPath, keepFilePath) {
    const fullDirPath = `${this.app.vault.configDir}/${dirPath}`;
    const files = await this.app.vault.adapter.list(fullDirPath).catch(() => null);
    if (!files || !files.files) return;
    for (const file of files.files) {
      if (file !== `${this.app.vault.configDir}/${keepFilePath}`) {
        await this.app.vault.adapter.remove(file).catch(() => {
        });
      }
    }
  }
  async resizeImageToBlob(file, allowFullRes = false) {
    const img = await createImageBitmap(file);
    let MAX_WIDTH = window.innerWidth;
    if (import_obsidian6.Platform.isMobile) {
      const parsed = parseInt(this.settings.mobileBackgroundWidth);
      if (!isNaN(parsed)) {
        MAX_WIDTH = parsed;
      }
    }
    if (allowFullRes || img.width <= MAX_WIDTH) {
      return new Blob([await file.arrayBuffer()], { type: file.type });
    }
    const newWidth = MAX_WIDTH;
    const newHeight = img.height / img.width * newWidth;
    const canvas = new OffscreenCanvas(newWidth, newHeight);
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const bmp = await createImageBitmap(img, {
      resizeWidth: newWidth,
      resizeHeight: newHeight,
      resizeQuality: "high"
    });
    ctx.drawImage(bmp, 0, 0, newWidth, newHeight);
    return canvas.convertToBlob({ quality: 0.8, type: "image/jpeg" });
  }
  async LoadOrUnloadChanges(load) {
    const el = document.body.classList.contains("theme-dark") || document.body.classList.contains("theme-light") ? document.body : document.documentElement;
    if (!el) return;
    for (const { attribute } of this.settings.TextArenas) {
      try {
        const attr = attribute?.trim();
        if (!attr) continue;
        const isVar = attr.startsWith("--");
        if (isVar) {
          if (load) {
            el.style.setProperty(attr, "transparent", "important");
          } else {
            el.style.removeProperty(attr);
          }
          continue;
        }
        if (load) {
          el.style.setProperty(attr, "transparent", "important");
        } else {
          el.style.removeProperty(attr);
          if (!el.getAttribute("style")) {
            el.removeAttribute("style");
          }
        }
      } catch (error) {
        console.error("Error processing element:", { attribute }, error);
      }
    }
  }
  ApplyChanges(id) {
    const { attribute } = this.settings.TextArenas[id];
    const attr = attribute.trim();
    const isVar = attr.startsWith("--");
    let el = null;
    if (isVar) {
      el = document.body.classList.contains("theme-dark") || document.body.classList.contains("theme-light") ? document.body : document.documentElement;
    } else {
      el = document.body;
    }
    if (!el) return;
    el.style.setProperty(attr, "transparent", "important");
  }
  async RemoveChanges(id, oldAttribute) {
    if (id < 0 || id >= this.settings.TextArenas.length) return;
    const attribute = (oldAttribute ?? this.settings.TextArenas[id].attribute)?.trim();
    const el = document.body.classList.contains("theme-dark") || document.body.classList.contains("theme-light") ? document.body : document.documentElement;
    if (!attribute || !el) return;
    try {
      el.style.removeProperty(attribute);
      if (!el.getAttribute("style")) {
        el.removeAttribute("style");
      }
    } catch (error) {
      console.error(`Error removing '${attribute}' at index ${id}:`, error);
    }
  }
  async toggleModalStyles() {
    const styleId = "extrastyles-dynamic-css";
    let style = document.getElementById(styleId);
    if (this.settings.AdnvOpend) {
      if (!style) {
        style = document.createElement("style");
        style.id = styleId;
        document.head.appendChild(style);
      }
      const { effect, blurRadius, dimOpacity, dimColor, disableModalBg } = this.settings.modalStyle;
      let background = "transparent";
      let backdrop = "none";
      let extraCss = "";
      if (effect.includes("dim")) {
        const color = dimColor === "white" ? "255, 255, 255" : "0, 0, 0";
        background = `rgba(${color}, ${dimOpacity})`;
      }
      if (effect.includes("blur")) {
        backdrop = `blur(${blurRadius}px)`;
      }
      if (disableModalBg) {
        extraCss += `.modal-bg { opacity: 0 !important; }`;
      }
      style.textContent = `
        .modal-container.mod-dim,
        .modal-container {
          background: ${background};
          backdrop-filter: ${backdrop};
        }
        ${extraCss}
      `;
    } else {
      style?.remove();
    }
    const wallpaperExists = await SettingsUtils.getPathExists(this, this.settings.currentWallpaper.path);
    if (!wallpaperExists) {
      this.LoadOrUnloadChanges(false);
      return;
    } else {
      this.LoadOrUnloadChanges(this.settings.AdnvOpend);
    }
  }
  RemoveModalStyles() {
    const styleId = "extrastyles-dynamic-css";
    const existingStyle = document.getElementById(styleId);
    existingStyle != null ? existingStyle.remove() : "";
  }
  async applyBackgroundColor() {
    const existingElement = document.getElementById("live-wallpaper-container");
    if (existingElement) {
      if (this.settings.AdnvOpend && this.settings.Color) {
        existingElement.parentElement?.style.setProperty("background-color", this.settings.Color, "important");
      }
      return;
    }
    await new Promise((resolve) => {
      const observer = new MutationObserver((mutations, obs) => {
        const element = document.getElementById("live-wallpaper-container");
        if (element) {
          obs.disconnect();
          resolve();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
    if (this.settings.AdnvOpend && this.settings.Color) {
      const Main = document.getElementById("live-wallpaper-container");
      Main?.parentElement?.style.setProperty("background-color", this.settings.Color, "important");
    }
  }
  async clearBackgroundColor() {
    const Main = document.getElementById("live-wallpaper-container");
    Main?.parentElement?.style.removeProperty("background-color");
  }
  startDayNightWatcher() {
    this.stopDayNightWatcher();
    this._dayNightInterval = window.setInterval(() => {
      if (this.settings.Preview) return;
      const index = WallpaperConfigUtils.getWallpaperIndex(this);
      if (index !== null) {
        if (this.settings.globalConfig.enabled) {
          this.settings.currentWallpaper = WallpaperConfigUtils.applyGlobalConfig(this.settings.WallpaperConfigs[index], this.settings.globalConfig.config);
        } else {
          this.settings.currentWallpaper = this.settings.WallpaperConfigs[index];
        }
        this.applyWallpaper(true);
      }
    }, Scheduler.getIntervalInMs(this.settings.ScheduledOptions));
  }
  stopDayNightWatcher() {
    if (this._dayNightInterval) {
      clearInterval(this._dayNightInterval);
      this._dayNightInterval = -1;
    }
  }
  async cleanInvalidWallpaperHistory() {
    const validPaths = [];
    for (const entry of this.settings.HistoryPaths) {
      const fullPath = `${this.app.vault.configDir}/${entry.path}`;
      const exists = await this.app.vault.adapter.exists(fullPath);
      if (exists) {
        validPaths.push(entry);
      }
    }
    this.settings.HistoryPaths = validPaths;
    await this.saveSettings();
  }
};

/* nosourcemap */