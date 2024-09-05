System.register(["jimu-core","jimu-arcgis","esri/widgets/Editor"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/widgets/Editor":
/*!**************************************!*\
  !*** external "esri/widgets/Editor" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************************!*\
  !*** ./your-extensions/widgets/voirie/src/runtime/widget.tsx ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_widgets_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/widgets/Editor */ "esri/widgets/Editor");



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.myRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.activeViewChangeHandler = (jmv) => {
            console.log('activeViewChangeHandler called', jmv);
            if (this.state.jimuMapView) {
                if (this.state.currentWidget) {
                    this.state.currentWidget.destroy();
                }
            }
            if (jmv) {
                this.setState({
                    jimuMapView: jmv
                });
                const activeLayers = jmv.view.map.layers.toArray();
                const setProjects = new Set();
                // Log the features of each layer
                activeLayers.forEach((layer) => {
                    if (layer.type === 'feature') {
                        layer.queryFeatures().then((featureSet) => {
                            featureSet.features.forEach((feature) => {
                                setProjects.add(feature.attributes.projet);
                            });
                            // Update state with projects from setProjects
                            this.setState({
                                projects: Array.from(setProjects).map((project) => ({
                                    name: project,
                                    id: project
                                }))
                            });
                            console.log('Projects updated:', this.state.projects);
                        }).catch((error) => {
                            console.error(`Error querying features of layer ${layer.title}:`, error);
                        });
                    }
                });
                if (this.myRef.current) {
                    const newEditor = new esri_widgets_Editor__WEBPACK_IMPORTED_MODULE_2__["default"]({
                        view: jmv.view,
                        container: this.myRef.current
                    });
                    // Add event listener for the 'create' event
                    newEditor.on('sketch-create', (event) => {
                        const feature = event.detail.graphic;
                        feature.attributes.projet = this.state.selectedProjectId;
                        console.log('Feature created:', feature);
                    });
                    this.setState({
                        currentWidget: newEditor
                    });
                }
                else {
                    console.error('could not find this.myRef.current');
                }
            }
        };
        this.addProject = () => {
            const newProject = { name: this.state.projectName, id: this.state.projectName };
            this.setState(prevState => ({
                projects: [...prevState.projects, newProject],
                projectName: '',
                selectedProjectId: newProject.id
            }));
            console.log('Project added:', newProject);
        };
        this.removeProject = () => {
            this.setState(prevState => {
                const updatedProjects = prevState.projects.filter(project => project.id !== prevState.selectedProjectId);
                return {
                    projects: updatedProjects,
                    selectedProjectId: updatedProjects.length > 0 ? updatedProjects[0].id : null
                };
            });
            console.log('Project removed');
        };
        this.handleProjectNameChange = (event) => {
            this.setState({ projectName: event.target.value });
            console.log('Project name changed:', event.target.value);
        };
        this.handleProjectSelectionChange = (event) => {
            this.setState({ selectedProjectId: event.target.value });
            console.log('Project selected:', event.target.value);
        };
        this.onFeatureEdit = (event) => {
            if (event.type === 'create' && this.state.selectedProjectId) {
                event.feature.attributes.projet = this.state.selectedProjectId;
            }
        };
        this.state = {
            jimuMapView: null,
            currentWidget: null,
            projects: [],
            selectedProjectId: null,
            projectName: ''
        };
        console.log('Widget constructor initialized');
    }
    render() {
        var _a;
        const css = `
    .esri-editor__scroller {
        overflow-y: auto;
        padding-top: $cap-spacing--half;
        padding-bottom: $cap-spacing;
      }
      .esri-editor__content-group {
        max-height: 1em;
      }
    `;
        let mvc = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Please select a map.");
        if (Object.prototype.hasOwnProperty.call(this.props, 'useMapWidgetIds') &&
            this.props.useMapWidgetIds &&
            this.props.useMapWidgetIds[0]) {
            mvc = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler }));
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-addLayers jimu-widget p-2", style: { height: '100%', overflow: 'auto' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, "Create a New Project"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "text", value: this.state.projectName, onChange: this.handleProjectNameChange, placeholder: "Enter project name" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: this.addProject }, "Add Project")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, "Select a Project"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { value: this.state.selectedProjectId || '', onChange: this.handleProjectSelectionChange },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "", disabled: true }, "Select a project"),
                    this.state.projects.map((project) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: project.id, value: project.id }, project.name)))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: this.removeProject, disabled: !this.state.selectedProjectId }, "Remove Project")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { ref: this.myRef },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("style", null, css)),
            mvc));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92b2lyaWUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05RO0FBSXZDO0FBQ29CO0FBYXpCLE1BQU0sTUFBTyxTQUFRLDRDQUFLLENBQUMsYUFHekM7SUFHQyxZQUFhLEtBQStCO1FBQzFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFIRyxVQUFLLEdBQUcsNENBQUssQ0FBQyxTQUFTLEVBQWtCO1FBYzFELDRCQUF1QixHQUFHLENBQUMsR0FBZ0IsRUFBRSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxDQUFDO1lBQ2xELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNaLFdBQVcsRUFBRSxHQUFHO2lCQUNqQixDQUFDO2dCQUVGLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xELE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxFQUFVO2dCQUVyQyxpQ0FBaUM7Z0JBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO3dCQUM1QixLQUFzQixDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFOzRCQUMxRCxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dDQUN0QyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDOzRCQUM1QyxDQUFDLENBQUM7NEJBRUYsOENBQThDOzRCQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDO2dDQUNaLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztvQ0FDbEQsSUFBSSxFQUFFLE9BQU87b0NBQ2IsRUFBRSxFQUFFLE9BQU87aUNBQ1osQ0FBQyxDQUFDOzZCQUNKLENBQUM7NEJBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzt3QkFDdkQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7NEJBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUM7d0JBQzFFLENBQUMsQ0FBQztvQkFDSixDQUFDO2dCQUNILENBQUMsQ0FBQztnQkFFRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3ZCLE1BQU0sU0FBUyxHQUFHLElBQUksMkRBQU0sQ0FBQzt3QkFDM0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO3dCQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87cUJBQzlCLENBQUM7b0JBRUYsNENBQTRDO29CQUM1QyxTQUFTLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUN0QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87d0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCO3dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQztvQkFDMUMsQ0FBQyxDQUFDO29CQUVGLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ1osYUFBYSxFQUFFLFNBQVM7cUJBQ3pCLENBQUM7Z0JBQ0osQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUM7Z0JBQ3BELENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUVELGVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDaEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQy9FLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixRQUFRLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO2dCQUM3QyxXQUFXLEVBQUUsRUFBRTtnQkFDZixpQkFBaUIsRUFBRSxVQUFVLENBQUMsRUFBRTthQUNqQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQztRQUMzQyxDQUFDO1FBRUQsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDeEIsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQy9DLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxTQUFTLENBQUMsaUJBQWlCLENBQ3REO2dCQUNELE9BQU87b0JBQ0wsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUM3RTtZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQztRQUVELDRCQUF1QixHQUFHLENBQUMsS0FBMEMsRUFBRSxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFELENBQUM7UUFFRCxpQ0FBNEIsR0FBRyxDQUFDLEtBQTJDLEVBQUUsRUFBRTtZQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RELENBQUM7UUFFRCxrQkFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzVELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtZQUNoRSxDQUFDO1FBQ0gsQ0FBQztRQTNHQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLElBQUk7WUFDbkIsUUFBUSxFQUFFLEVBQUU7WUFDWixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFdBQVcsRUFBRSxFQUFFO1NBQ2hCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMvQyxDQUFDO0lBcUdELE1BQU07O1FBQ0osTUFBTSxHQUFHLEdBQUc7Ozs7Ozs7OztLQVNYO1FBRUQsSUFBSSxHQUFHLEdBQUcsNkZBQTJCO1FBRXJDLElBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUM7WUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUM3QixDQUFDO1lBQ0QsR0FBRyxHQUFHLENBQ0osMkRBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxVQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQy9DLGtCQUFrQixFQUFFLElBQUksQ0FBQyx1QkFBdUIsR0FDaEQsQ0FDSDtRQUNILENBQUM7UUFFRCxPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLGtDQUFrQyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtZQUMzRjtnQkFDRSw4RkFBNkI7Z0JBQzdCLHNFQUNFLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUN0QyxXQUFXLEVBQUMsb0JBQW9CLEdBQ2hDO2dCQUNGLHVFQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxrQkFBc0IsQ0FDbEQ7WUFDTjtnQkFDRSwwRkFBeUI7Z0JBQ3pCLHVFQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLEVBQUUsRUFDekMsUUFBUSxFQUFFLElBQUksQ0FBQyw0QkFBNEI7b0JBRTNDLHVFQUFRLEtBQUssRUFBQyxFQUFFLEVBQUMsUUFBUSw2QkFBMEI7b0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDcEMsdUVBQVEsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBVSxDQUNwRSxDQUFDLENBQ0s7Z0JBQ1QsdUVBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIscUJBRW5FLENBQ0w7WUFDTixvRUFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2xCLDBFQUFRLEdBQUcsQ0FBUyxDQUNoQjtZQUNMLEdBQUcsQ0FDQSxDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9FZGl0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZvaXJpZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfRWRpdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBKaW11TWFwVmlld0NvbXBvbmVudCxcbiAgdHlwZSBKaW11TWFwVmlld1xufSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCBFZGl0b3IgZnJvbSAnZXNyaS93aWRnZXRzL0VkaXRvcidcbmltcG9ydCB0eXBlIEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG5cbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcgfCBudWxsXG4gIGN1cnJlbnRXaWRnZXQ6IEVkaXRvciB8IG51bGxcbiAgcHJvamVjdHM6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBpZDogc3RyaW5nIH0+XG4gIHNlbGVjdGVkUHJvamVjdElkOiBzdHJpbmcgfCBudWxsXG4gIHByb2plY3ROYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbklTdGF0ZVxuPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbXlSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KClcblxuICBjb25zdHJ1Y3RvciAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBqaW11TWFwVmlldzogbnVsbCxcbiAgICAgIGN1cnJlbnRXaWRnZXQ6IG51bGwsXG4gICAgICBwcm9qZWN0czogW10sXG4gICAgICBzZWxlY3RlZFByb2plY3RJZDogbnVsbCxcbiAgICAgIHByb2plY3ROYW1lOiAnJ1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnV2lkZ2V0IGNvbnN0cnVjdG9yIGluaXRpYWxpemVkJylcbiAgfVxuXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgY2FsbGVkJywgam12KVxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50V2lkZ2V0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFdpZGdldC5kZXN0cm95KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoam12KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgamltdU1hcFZpZXc6IGptdlxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWN0aXZlTGF5ZXJzID0gam12LnZpZXcubWFwLmxheWVycy50b0FycmF5KClcbiAgICAgIGNvbnN0IHNldFByb2plY3RzID0gbmV3IFNldDxzdHJpbmc+KClcblxuICAgICAgLy8gTG9nIHRoZSBmZWF0dXJlcyBvZiBlYWNoIGxheWVyXG4gICAgICBhY3RpdmVMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJykge1xuICAgICAgICAgIChsYXllciBhcyBGZWF0dXJlTGF5ZXIpLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKChmZWF0dXJlU2V0KSA9PiB7XG4gICAgICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgICAgc2V0UHJvamVjdHMuYWRkKGZlYXR1cmUuYXR0cmlidXRlcy5wcm9qZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCBwcm9qZWN0cyBmcm9tIHNldFByb2plY3RzXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgcHJvamVjdHM6IEFycmF5LmZyb20oc2V0UHJvamVjdHMpLm1hcCgocHJvamVjdCkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0LFxuICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0cyB1cGRhdGVkOicsIHRoaXMuc3RhdGUucHJvamVjdHMpXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBxdWVyeWluZyBmZWF0dXJlcyBvZiBsYXllciAke2xheWVyLnRpdGxlfTpgLCBlcnJvcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5teVJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld0VkaXRvciA9IG5ldyBFZGl0b3Ioe1xuICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxuICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy5teVJlZi5jdXJyZW50XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgJ2NyZWF0ZScgZXZlbnRcbiAgICAgICAgbmV3RWRpdG9yLm9uKCdza2V0Y2gtY3JlYXRlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmRldGFpbC5ncmFwaGljXG4gICAgICAgICAgZmVhdHVyZS5hdHRyaWJ1dGVzLnByb2pldCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0SWRcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmVhdHVyZSBjcmVhdGVkOicsIGZlYXR1cmUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFdpZGdldDogbmV3RWRpdG9yXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdjb3VsZCBub3QgZmluZCB0aGlzLm15UmVmLmN1cnJlbnQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHsgbmFtZTogdGhpcy5zdGF0ZS5wcm9qZWN0TmFtZSwgaWQ6IHRoaXMuc3RhdGUucHJvamVjdE5hbWUgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBwcm9qZWN0czogWy4uLnByZXZTdGF0ZS5wcm9qZWN0cywgbmV3UHJvamVjdF0sXG4gICAgICBwcm9qZWN0TmFtZTogJycsXG4gICAgICBzZWxlY3RlZFByb2plY3RJZDogbmV3UHJvamVjdC5pZFxuICAgIH0pKVxuICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0IGFkZGVkOicsIG5ld1Byb2plY3QpXG4gIH1cblxuICByZW1vdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByZXZTdGF0ZS5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgIHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gcHJldlN0YXRlLnNlbGVjdGVkUHJvamVjdElkXG4gICAgICApXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0czogdXBkYXRlZFByb2plY3RzLFxuICAgICAgICBzZWxlY3RlZFByb2plY3RJZDogdXBkYXRlZFByb2plY3RzLmxlbmd0aCA+IDAgPyB1cGRhdGVkUHJvamVjdHNbMF0uaWQgOiBudWxsXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnUHJvamVjdCByZW1vdmVkJylcbiAgfVxuXG4gIGhhbmRsZVByb2plY3ROYW1lQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9qZWN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgY29uc29sZS5sb2coJ1Byb2plY3QgbmFtZSBjaGFuZ2VkOicsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RTZWxlY3Rpb25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFByb2plY3RJZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgY29uc29sZS5sb2coJ1Byb2plY3Qgc2VsZWN0ZWQ6JywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgb25GZWF0dXJlRWRpdCA9IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjcmVhdGUnICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICAgIGV2ZW50LmZlYXR1cmUuYXR0cmlidXRlcy5wcm9qZXQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvamVjdElkXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBjc3MgPSBgXG4gICAgLmVzcmktZWRpdG9yX19zY3JvbGxlciB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAkY2FwLXNwYWNpbmctLWhhbGY7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAkY2FwLXNwYWNpbmc7XG4gICAgICB9XG4gICAgICAuZXNyaS1lZGl0b3JfX2NvbnRlbnQtZ3JvdXAge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxZW07XG4gICAgICB9XG4gICAgYFxuXG4gICAgbGV0IG12YyA9IDxwPlBsZWFzZSBzZWxlY3QgYSBtYXAuPC9wPlxuXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMucHJvcHMsICd1c2VNYXBXaWRnZXRJZHMnKSAmJlxuICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdXG4gICAgKSB7XG4gICAgICBtdmMgPSAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkTGF5ZXJzIGppbXUtd2lkZ2V0IHAtMlwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5DcmVhdGUgYSBOZXcgUHJvamVjdDwvaDM+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2plY3ROYW1lQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9qZWN0IG5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFByb2plY3R9PkFkZCBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5TZWxlY3QgYSBQcm9qZWN0PC9oMz5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFByb2plY3RJZCB8fCAnJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2plY3RTZWxlY3Rpb25DaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlNlbGVjdCBhIHByb2plY3Q8L29wdGlvbj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cHJvamVjdC5pZH0gdmFsdWU9e3Byb2plY3QuaWR9Pntwcm9qZWN0Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVtb3ZlUHJvamVjdH0gZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnNlbGVjdGVkUHJvamVjdElkfT5cbiAgICAgICAgICAgIFJlbW92ZSBQcm9qZWN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5teVJlZn0+XG4gICAgICAgICAgPHN0eWxlPntjc3N9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttdmN9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=