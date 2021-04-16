"use strict";

const ddcci = require("bindings")("ddcci");
const vcp = require("./vcp");

module.exports = {
    vcp

  , _getVCP: ddcci.getVCP
  , _setVCP: ddcci.setVCP
  , _refresh: ddcci.refresh
  , getMonitorList: ddcci.getMonitorList

  , getVCP: ddcci.getVCP
  , setVCP: ddcci.setVCP

  , getBrightness (monitorId) {
        return ddcci.getVCP(monitorId, vcp.LUMINANCE)[0];
    }

  , getMaxBrightness (monitorId) {
        return ddcci.getVCP(monitorId, vcp.LUMINANCE)[1];
    }

  , getContrast (monitorId) {
        return ddcci.getVCP(monitorId, vcp.CONTRAST)[0];
    }

  , getMaxContrast (monitorId) {
        return ddcci.getVCP(monitorId, vcp.CONTRAST)[1];
    }

  , getInput (monitorId) {
        return ddcci.getVCP(monitorId, vcp.INPUT_SOURCE)[0];
  }

  , setBrightness (monitorId, level) {
        if (level < 0) {
            throw RangeError("Brightness level not within valid range");
        }

        ddcci.setVCP(monitorId, vcp.LUMINANCE, level);
    }

  , setContrast (monitorId, level) {
        if (level < 0) {
            throw RangeError("Contrast level not within valid range");
        }

        ddcci.setVCP(monitorId, vcp.CONTRAST, level);
    }

  , setInput (monitorId, value) {
        if (value < 1 || value > 18) {
            throw RangeError("Input value not within valid range");
        }

        ddcci.setVCP(monitorId, vcp.INPUT_SOURCE, value);
    }
};

