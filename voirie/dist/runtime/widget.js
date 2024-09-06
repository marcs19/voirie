System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_FeatureLayer_js") return "widgets/chunks/d8e4d0e3d16f66441d225741ef914bd3.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_featureConversionUtils_js") return "widgets/chunks/42bd8522031859cd275d63e6b9fb5d57.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_rest_query_operations_pbfQueryUtils_js") return "widgets/chunks/b0b76b2ce3368895773bb3101546cf38.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_rest_query_operations_query_js") return "widgets/chunks/d1c0d0e47a5a5c43748cdb1dc13bedb9.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_sources_support_QueryTask_js") return "widgets/chunks/fb26a5d8b523f652d3fe918184ae61b4.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_editingSupport_js") return "widgets/chunks/c8328dc832c7bdfdcfa090f1622f11c9.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_sources_FeatureLayerSource_js") return "widgets/chunks/5e21c5d722006c204cf4a158ea63f415.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_save_featureLayerUtils_js") return "widgets/chunks/27d67acee6a2b47199fc72622febebe5.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_core_sql_WhereClause_js") return "widgets/chunks/0082d1cbba51d9f54a45b0346da8bdb6.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_arcade_executionError_js") return "widgets/chunks/8d1673b8ab49096c41add239513393c0.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_support_arcadeUtils_js") return "widgets/chunks/8bbd59cea1022c9089f63aa673c2d33b.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_Basemap_js") return "widgets/chunks/910e1390c3078e240fc4193059027c5e.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_support_TileInfo_js-node_modules_arcgis_core_layers_s-320776") return "widgets/chunks/2e27048183002fe579fbfe51ea36e506.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_ElevationLayer_js") return "widgets/chunks/7fa2827058cb7f47530593899c48829d.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_core_workers_request_js") return "widgets/chunks/86082a4504a32eb11e96a998cb98bc52.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_identity_IdentityManager_js") return "widgets/chunks/b2ea11935e65a4bf3367df580cd2f288.js";
/******/ 			if (chunkId === "node_modules_stencil_core_internal_client_lazy_recursive_entry_js_include_entry_js_exclude_sy-4b148b") return "widgets/chunks/09ba6034189150cd7e8b31ab5a44acb7.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_symbols_support_webStyleSymbolUtils_js") return "widgets/chunks/fd8eb0b07f1db02a1193132392917daf.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_support_arcgisLayers_js") return "widgets/chunks/0b8b23a9aa8e7fc5e246421610d00b23.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_portal_support_portalLayers_js") return "widgets/chunks/58f48a2dd7a01bdd9d3c40eba82db477.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_quantizationUtils_js-node_modules_arcgis_co-a9e48e") return "widgets/chunks/25165dfc01434b1801dc04eea1fb0302.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_smartMapping_statistics_support_statsWorker_js") return "widgets/chunks/50920efd82f20fcff77e19a85559b064.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_geometryEngineBase_js") return "widgets/chunks/6dd48661b674ed468677725a1d188983.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_geometry_geometryEngineWorker_js") return "widgets/chunks/4180ff00916e9957a75f4e863d16f6a2.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_arcade_executionError_js-node_modules_arcgis_core_chunks_qui-9a815a") return "widgets/chunks/045b7aa307b45ecefe64b07af741ff75.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_data_FeatureStore_js") return "widgets/chunks/2b39f4b5398d942b9fe491545175bb7d.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_normalizeUtils_js-node_modules_arcgis_core_-4165de") return "widgets/chunks/d5f82198ae9686e82aa407d8d98f71ef.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_webgl_enums_js") return "widgets/chunks/4b0488a164a42b1b9566770f2b951631.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_buffer_BufferView_js") return "widgets/chunks/86488c96ae7dad861d33ea7e338814aa.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_Indices_js-node_modules_arcgis_core_views_3-8ee955") return "widgets/chunks/fd12c97a9205e2dc2c4a7736f1c016bc.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_3d_webgl-engine_lib_edgeRendering_edgeProcessing_js") return "widgets/chunks/afe2a4eb4b5e1b145720baa8e5bf71ff.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_chunks_vec2f64_js-node_modules_arcgis_core_views_3d_webgl-engine_lib-89e247") return "widgets/chunks/8ca5c9d5925740a77237c63bdd221b75.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_mat3_js-node_modules_arcgis_core_chunks_quat_js-node_-52a19e") return "widgets/chunks/1dd2febc73fcdadb78fe65ee72806b69.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_meshUtils_georeference_js") return "widgets/chunks/ac9fbe10dbe454771f6d54f5eaa266e9.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_mat3f64_js-node_modules_arcgis_core_chunks_mat4f64_js-d14acf") return "widgets/chunks/7f54987e5b8b9fdc008080dda0f88b03.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_interactive_snapping_featureSources_featureServiceSour-477f9e") return "widgets/chunks/fe82a06ed3b2130ad7963b635c0d1b6c.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_normalizeUtils_js-node_modules_arcgis_core_-b63415") return "widgets/chunks/711bac139c4dfc975d006254ce70b2ae.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_sources_geojson_GeoJSONSourceWorker_js") return "widgets/chunks/435b4a02dc6d458c0668a5c16391a649.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_support_LercWorker_js") return "widgets/chunks/61c56c5b27e0a90ad8035b5ac8239161.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_sources_support_MemorySourceWorker_js") return "widgets/chunks/3c03a3657dcefed9c40df6408f3d889e.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_3d_support_PBFDecoderWorker_js") return "widgets/chunks/b97810e6297d321d377a5d60affb8ab3.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_symbols_cim_enums_js-node_modules_arcgis_core_views_2d_engin-269ab4") return "widgets/chunks/e776b6e6f7fb689b2dec8e7a1bc8b44c.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_ogc_ogcFeatureUtils_js") return "widgets/chunks/b310d4c737cf663e02bd06e7b8ced3a4.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_graphics_sources_connections_createConnection_js") return "widgets/chunks/df4bd851f428ec771622466a715ca5d2.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_2d_layers_features_Pipeline_js") return "widgets/chunks/09a017a7df5056e2f25235640ef0c40a.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_quatf32_js-node_modules_arcgis_core_chunks_vec3f32_js-31fd6e") return "widgets/chunks/42d123fa47000ce47ce06aa262b95bfb.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_renderers_PointCloudClassBreaksRenderer_js-node_modules_arcg-18c8ae") return "widgets/chunks/ac692df3449ea3c56b4996dbdcd76171.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_3d_layers_PointCloudWorker_js") return "widgets/chunks/80ae11ed8fc81b50ad83a9915892c843.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_support_rasterFormats_RasterCodec_js-node_modules_arc-8bf7d2") return "widgets/chunks/c58790dafd59efb059f3155933bd5179.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_support_rasterFunctions_rasterFunctionHelper_js-node_-ff8628") return "widgets/chunks/3fdadd5034ab0e0a71e8c6d290b7dc82.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_support_RasterWorker_js") return "widgets/chunks/ee3c6f8574a293871a8699ce0cd39d27.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_sphere_js") return "widgets/chunks/7ae2de527305e848323c35f1441ae422.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_interactive_snapping_featureSources_sceneLayerSource_S-255f0b") return "widgets/chunks/a97053d2f1f54862686593a1bf79988f.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_3d_layers_SceneLayerWorker_js") return "widgets/chunks/22d798ab29da87bcfc5c4b5f92d93ec9.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_ogc_wfsUtils_js") return "widgets/chunks/853f5b8cbd0250a589786e9567ab1371.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_graphics_sources_WFSSourceWorker_js") return "widgets/chunks/646f3d4de1e5091683b2957d8a3bd2fc.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_TileClipper_js-node_modules_arcgis_core_vie-6140ae") return "widgets/chunks/178377cb0d4596586080d65df23b114e.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_2d_engine_vectorTiles_style_StyleRepository_js") return "widgets/chunks/a284e8fe5eb41dcc9c4338dfb93797e1.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_earcut_js-node_modules_arcgis_core_core_BidiEngine_js-d3e6b2") return "widgets/chunks/c30516dda244059e9bad7f441569a6a0.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_2d_engine_vectorTiles_WorkerTileHandler_js") return "widgets/chunks/1bdf3b68e6a7a317395ea149089bfd3b.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_geometry_support_normalizeUtils_js-node_modules_arcgis_core_layers_s-93373d") return "widgets/chunks/c4ebacf9adaabe109af55c0cecae7138.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_portal_support_layersLoader_js") return "widgets/chunks/c44fe04cdc73065c169dabdf869d0758.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_portal_support_resourceUtils_js") return "widgets/chunks/5573aa9117c57207ab1a63a01afddd0b.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_geometry_geometryAdapters_hydrated_js") return "widgets/chunks/0df81e2dbd3ac8f172ec7a1db6261285.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_pe-wasm_js") return "widgets/chunks/4bd8c66ca0a5860df3db36338e78c3da.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_graphics_sources_support_uploadAssets_js") return "widgets/chunks/a0bf3a7eecbb835d48e3949c48380f9e.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_quatf64_js-node_modules_arcgis_core_chunks_vec32_js-n-4c5d6b") return "widgets/chunks/52b0ee1d73ee295741892f7ad775f1fa.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_rest_query_executeRelationshipQuery_js") return "widgets/chunks/65cf5950d9c0381f8a9b5a3b3b975724.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_rest_query_operations_queryAttachments_js") return "widgets/chunks/30284b3336734c5f9caf312f79294c68.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_rest_query_executeTopFeaturesQuery_js") return "widgets/chunks/eb6ecfe18554fad2b8cb33fe133f16f5.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_rest_query_executeForTopIds_js") return "widgets/chunks/166fb20fe5fb03625ef3dac7bb9e4d3c.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_rest_query_executeForTopExtents_js") return "widgets/chunks/dd61cad8e2e05c3a451abd65246f9fd8.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_rest_query_executeForTopCount_js") return "widgets/chunks/400c8cf833b9efce091cd7bc74a37fd9.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_geometry_geometryEngine_js") return "widgets/chunks/2d966985cff4895255a5f5fead81e694.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_arcade_functions_geomasync_js") return "widgets/chunks/904ec6e63506ccda4b13e900e022bd0b.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_arcade_arcadeAsyncRuntime_js") return "widgets/chunks/ea257ddfdc60e4aae6d35fd441874f5b.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_arcade_featureset_actions_SpatialFilter_js") return "widgets/chunks/ad98f035b521dd46d1defb72c5cc8d06.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_SubtypeGroupLayer_js") return "widgets/chunks/ac5d6998e4610e75ce1fe725acbe49be.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_arcade_featureSetUtils_js") return "widgets/chunks/0fe5164bfdf1205343b50ab3c1d2abaa.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_arcade_functions_featuresetbase_js") return "widgets/chunks/8b17ba2aa11f4007e0d0c16b1d3ec82d.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_arcade_functions_featuresetgeom_js") return "widgets/chunks/aa9426cb9b9f87f01f9eab370649242c.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_arcade_functions_featuresetstats_js") return "widgets/chunks/22ce706e914b9abed6b185af7dd97fd7.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_arcade_functions_featuresetstring_js") return "widgets/chunks/1f781fb56ac25ff947d4df65832f0a06.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_support_layersCreator_js") return "widgets/chunks/8ef0b5006eee7a6f51c5315509711e0a.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_support_ElevationQuery_js") return "widgets/chunks/ddf46dca3154cdf012f1fe9ee6188e82.js";
/******/ 			if (chunkId === "vendors-node_modules_stencil_core_internal_client_shadow-css_js") return "widgets/chunks/26c1c428ab3c9f79e82c16889ef5c112.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_GroupLayer_js") return "widgets/chunks/a8d7dbb002ecf0a334c76d54c4c5004d.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_BingMapsLayer_js") return "widgets/chunks/73f9abd65b478be3b1ecd0803d69e351.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_mixins_SceneService_js") return "widgets/chunks/7267621f4fc5cdf250bd213fe14a5077.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_support_FetchAssociatedFeatureLayer_js-node_modules_a-e4d7e6") return "widgets/chunks/f6dc6565d52e959a24e57d309e5918cf.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_BuildingSceneLayer_js") return "widgets/chunks/b699bf7c3dd9cb3d79b727981d2ee57e.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_CSVLayer_js") return "widgets/chunks/6d75fdf7e37e56b87b08e1fee6ddc58d.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_DimensionLayer_js") return "widgets/chunks/f7478e5daf757bcb15442a5140d992ff.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_GeoJSONLayer_js") return "widgets/chunks/2e5604a639f71d35ccf2fef833131853.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_GeoRSSLayer_js") return "widgets/chunks/3d2436154d53e5ce9b990578bb76fdd3.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_support_MultidimensionalSubset_js-node_modules_arcgis-ed9caa") return "widgets/chunks/6d3ff26d1e768bad182266fd8681dac5.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_ImageryLayer_js") return "widgets/chunks/a7b53b5e9566cca112f7fa46297c68e9.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_normalizeUtils_js-node_modules_arcgis_core_-9af883") return "widgets/chunks/49817a6bd290c28fde41d68dc67564cc.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_IntegratedMeshLayer_js") return "widgets/chunks/54c581a27860898d013e7ed1465074b5.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_KMLLayer_js") return "widgets/chunks/aff2dd1b9ee8622298f29156a3c84d05.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_LineOfSightLayer_js") return "widgets/chunks/9f1c7fd8b14d2b57dcd0cbe5682d9654.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_normalizeUtils_js-node_modules_arcgis_core_-db1691") return "widgets/chunks/0897b5bb6ce35b9d942a1370f9f979ee.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_core_loadAll_js-node_modules_arcgis_core_layers_mixins_ArcGI-5ea93f") return "widgets/chunks/29ae2797293b40d96aa6e4ba68952815.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_MapImageLayer_js") return "widgets/chunks/ec2b68148446291d88da56dd6da71fdd.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_MapNotesLayer_js") return "widgets/chunks/56b399498b96db2cc9fcf359637c5c5c.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_MediaLayer_js") return "widgets/chunks/7af2fe746799e702f642d572ba88ec29.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_OGCFeatureLayer_js-node_modules_arcgis_core_layers_gr-964736") return "widgets/chunks/446e77e580e8bef2500958e79fc65b15.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_WebTileLayer_js") return "widgets/chunks/e00eb4c2ce6c57fe37d75f00b0a2a3b9.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_OpenStreetMapLayer_js") return "widgets/chunks/6393fc1024c0fd349b017643abe9e310.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_OrientedImageryLayer_js") return "widgets/chunks/3a3e06860a7b0134504ceac7a8b9f476.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_PointCloudLayer_js") return "widgets/chunks/6985dafde451129b06fb6f5695299bb7.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_RouteLayer_js") return "widgets/chunks/0b6b59faf700ee28b03ac2ecdce3bb7c.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_SceneLayer_js") return "widgets/chunks/9a18493c872227cf06f14ca9bde17e69.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_StreamLayer_js") return "widgets/chunks/1d1bdfe124334313ccfe63e42ce12ec6.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_TileLayer_js") return "widgets/chunks/21c81097575386ded3f15c35a2806bf2.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_UnknownLayer_js") return "widgets/chunks/7bbaf51730443e26937a996f821a8c3f.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_UnsupportedLayer_js") return "widgets/chunks/638b5099540ec3d70a4c3afe34c06465.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_VectorTileLayer_js") return "widgets/chunks/7019cfaa392953232db4349afaad8a8f.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_VoxelLayer_js") return "widgets/chunks/d2d55a2803c0068ca946f01fc42b4137.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_WFSLayer_js-node_modules_arcgis_core_layers_graphics_-8e4a35") return "widgets/chunks/21e8964146c6e549481a5231453aba17.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_WMSLayer_js") return "widgets/chunks/3ee8cb56eaf8d7c7f385a848051cf37f.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_layers_WMTSLayer_js") return "widgets/chunks/e8e260a8cc54c4e4fa31ce7482568013.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_geometry_geometryEngineJSON_js-_997e1") return "widgets/chunks/6116ea992eb2048cb7b1f0db768702ee.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_views_2d_layers_features_processors_HeatmapProcessor_js") return "widgets/chunks/c302d5c1ab80dafc35a2cc454714066d.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_2d_layers_features_processors_SymbolProcessor_js") return "widgets/chunks/da70acc3cd1f57e987c4299e603321e0.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_support_labelFormatUtils_js") return "widgets/chunks/7a9bdbbbbb7c27d2518da230acd31f9a.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_views_2d_layers_features_support_FeatureFilter_js") return "widgets/chunks/016ae71ece8db5c06a0049ad71a20c67.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_chunks_lerc-wasm_js") return "widgets/chunks/7180497df024d2adf495ff6ce7494bef.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_i3s_js") return "widgets/chunks/e550a557d2084b995d97a1f7ad5c76c6.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_libtess-asm_js") return "widgets/chunks/8bfa99aabf42747eb574212c8679d498.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_chunks_libtess_js") return "widgets/chunks/28f2e24ff411d0a6bfd6f55b02033894.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_geometry_support_meshUtils_exporters_gltf_gltfexport_js") return "widgets/chunks/d0956cdea0c14eef0b348f6282e729f1.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_vec22_js-node_modules_arcgis_core_chunks_vec33_js-nod-56a88d") return "widgets/chunks/17be2cc12a67d30ae0f21db260008ff5.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_geometry_support_meshUtils_loadGLTFMesh_js") return "widgets/chunks/3922345a9fba7ba81aaf02d37cd1c52e.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_symbols_support_symbolLayerUtils_js") return "widgets/chunks/91941e58b1fb65893976a2c009836fe2.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_geometry_geometryEngineJSON_js-_997e0") return "widgets/chunks/b6fd2ae68e875234fb11ed5b7b61d67d.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_arcgis-knowledge-client-core-simd_js") return "widgets/chunks/4d884dc24a067f2f4c630a359b488be3.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_arcgis-knowledge-client-core_js") return "widgets/chunks/0e1a00b5056b7300a7fc7a18f8a5e391.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_lclayout_js") return "widgets/chunks/bf7e20b9ec2ab88ba69b074aac67d8de.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_layers_graphics_OptimizedFeature_js-node_modules_arcgis_core_layers_-e75690") return "widgets/chunks/8db8bea4426e7e7ccac34cc82d9da0aa.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_views_2d_layers_features_createSymbolSchema_js") return "widgets/chunks/e5c5f9c3fc392d4383af798bebf28d02.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_views_3d_layers_graphics_objectResourceUtils_js") return "widgets/chunks/b9b3a255f7f0a8cd5cb1e3879b4f2082.js";
/******/ 			if (chunkId === "vendors-node_modules_arcgis_core_chunks_basis_transcoder_js") return "widgets/chunks/08451dd2a03642ef950a1d0cd2d3587f.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_views_3d_webgl-engine_shaders_DefaultMaterial_glsl_js") return "widgets/chunks/3bdcc6aea643daef0acafd22c45d2355.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_views_3d_webgl-engine_shaders_SSAOBlur_glsl_js") return "widgets/chunks/a4894dd8cd49e01874d00e58191b9d4e.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_views_3d_webgl-engine_shaders_SSAO_glsl_js") return "widgets/chunks/c86fc03c0304f5d1653bc4df5cb89370.js";
/******/ 			if (chunkId === "node_modules_arcgis_core_views_3d_webgl-engine_shaders_RealisticTree_glsl_js") return "widgets/chunks/3e2c2c405d2425f2c22023e9d34e38b8.js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "exb-client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"widgets/voirie/dist/runtime/widget": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.myRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.activeViewChangeHandler = (jmv) => __awaiter(this, void 0, void 0, function* () {
            console.log('activeViewChangeHandler called', jmv);
            if (jmv) {
                this.setState({
                    jimuMapView: jmv
                });
                const [FeatureLayer] = yield Promise.all([
                    __webpack_require__.e(/*! import() */ "vendors-node_modules_arcgis_core_layers_FeatureLayer_js").then(__webpack_require__.bind(__webpack_require__, /*! @arcgis/core/layers/FeatureLayer */ "./node_modules/@arcgis/core/layers/FeatureLayer.js"))
                ]);
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
            }
        });
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
        overflow-y: auto
        padding-top: $cap-spacing--half
        padding-bottom: $cap-spacing
      }
      .esri-editor__content-group {
        max-height: 1em
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy92b2lyaWUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOzs7OztXQ1JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtX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bEQ7WUFDTjtnQkFDRSwwRkFBeUI7Z0JBQ3pCLHVFQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLEVBQUUsRUFDekMsUUFBUSxFQUFFLElBQUksQ0FBQyw0QkFBNEI7b0JBRTNDLHVFQUFRLEtBQUssRUFBQyxFQUFFLEVBQUMsUUFBUSw2QkFBMEI7b0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDcEMsdUVBQVEsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBVSxDQUNwRSxDQUFDLENBQ0s7Z0JBQ1QsdUVBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIscUJBRW5FLENBQ0w7WUFDTixvRUFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2xCLDBFQUFRLEdBQUcsQ0FBUyxDQUNoQjtZQUNMLEdBQUcsQ0FDQSxDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3ZvaXJpZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBub3QgYmFzZWQgb24gdGVtcGxhdGVcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9kOGU0ZDBlM2QxNmY2NjQ0MWQyMjU3NDFlZjkxNGJkMy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfZ3JhcGhpY3NfZmVhdHVyZUNvbnZlcnNpb25VdGlsc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy80MmJkODUyMjAzMTg1OWNkMjc1ZDYzZTZiOWZiNWQ1Ny5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9yZXN0X3F1ZXJ5X29wZXJhdGlvbnNfcGJmUXVlcnlVdGlsc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9iMGI3NmIyY2UzMzY4ODk1NzczYmIzMTAxNTQ2Y2YzOC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9yZXN0X3F1ZXJ5X29wZXJhdGlvbnNfcXVlcnlfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZDFjMGQwZTQ3YTVhNWM0Mzc0OGNkYjFkYzEzYmVkYjkuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX2dyYXBoaWNzX3NvdXJjZXNfc3VwcG9ydF9RdWVyeVRhc2tfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZmIyNmE1ZDhiNTIzZjY1MmQzZmU5MTgxODRhZTYxYjQuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX2dyYXBoaWNzX2VkaXRpbmdTdXBwb3J0X2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2M4MzI4ZGM4MzJjN2JkZmRjZmEwOTBmMTYyMmYxMWM5LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19ncmFwaGljc19zb3VyY2VzX0ZlYXR1cmVMYXllclNvdXJjZV9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy81ZTIxYzVkNzIyMDA2YzIwNGNmNGExNThlYTYzZjQxNS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX3NhdmVfZmVhdHVyZUxheWVyVXRpbHNfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMjdkNjdhY2VlNmEyYjQ3MTk5ZmM3MjYyMmZlYmViZTUuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY29yZV9zcWxfV2hlcmVDbGF1c2VfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMDA4MmQxY2JiYTUxZDlmNTRhNDViMDM0NmRhOGJkYjYuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2FyY2FkZV9leGVjdXRpb25FcnJvcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy84ZDE2NzNiOGFiNDkwOTZjNDFhZGQyMzk1MTMzOTNjMC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9zdXBwb3J0X2FyY2FkZVV0aWxzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzhiYmQ1OWNlYTEwMjJjOTA4OWY2M2FhNjczYzJkMzNiLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX0Jhc2VtYXBfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvOTEwZTEzOTBjMzA3OGUyNDBmYzQxOTMwNTkwMjdjNWUuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX3N1cHBvcnRfVGlsZUluZm9fanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19zLTMyMDc3NlwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8yZTI3MDQ4MTgzMDAyZmU1NzlmYmZlNTFlYTM2ZTUwNi5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfRWxldmF0aW9uTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvN2ZhMjgyNzA1OGNiN2Y0NzUzMDU5Mzg5OWM0ODgyOWQuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NvcmVfd29ya2Vyc19yZXF1ZXN0X2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzg2MDgyYTQ1MDRhMzJlYjExZTk2YTk5OGNiOThiYzUyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2lkZW50aXR5X0lkZW50aXR5TWFuYWdlcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9iMmVhMTE5MzVlNjVhNGJmMzM2N2RmNTgwY2QyZjI4OC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfc3RlbmNpbF9jb3JlX2ludGVybmFsX2NsaWVudF9sYXp5X3JlY3Vyc2l2ZV9lbnRyeV9qc19pbmNsdWRlX2VudHJ5X2pzX2V4Y2x1ZGVfc3ktNGIxNDhiXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzA5YmE2MDM0MTg5MTUwY2Q3ZThiMzFhYjVhNDRhY2I3LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9zeW1ib2xzX3N1cHBvcnRfd2ViU3R5bGVTeW1ib2xVdGlsc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9mZDhlYjBiMDdmMWRiMDJhMTE5MzEzMjM5MjkxN2RhZi5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX3N1cHBvcnRfYXJjZ2lzTGF5ZXJzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzBiOGIyM2E5YWE4ZTdmYzVlMjQ2NDIxNjEwZDAwYjIzLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3BvcnRhbF9zdXBwb3J0X3BvcnRhbExheWVyc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy81OGY0OGEyZGQ3YTAxYmRkOWQzYzQwZWJhODJkYjQ3Ny5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9nZW9tZXRyeV9zdXBwb3J0X3F1YW50aXphdGlvblV0aWxzX2pzLW5vZGVfbW9kdWxlc19hcmNnaXNfY28tYTllNDhlXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzI1MTY1ZGZjMDE0MzRiMTgwMWRjMDRlZWExZmIwMzAyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9zbWFydE1hcHBpbmdfc3RhdGlzdGljc19zdXBwb3J0X3N0YXRzV29ya2VyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzUwOTIwZWZkODJmMjBmY2ZmNzdlMTlhODU1NTliMDY0LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19nZW9tZXRyeUVuZ2luZUJhc2VfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNmRkNDg2NjFiNjc0ZWQ0Njg2Nzc3MjVhMWQxODg5ODMuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lV29ya2VyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzQxODBmZjAwOTE2ZTk5NTdhNzVmNGU4NjNkMTZmNmEyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2FyY2FkZV9leGVjdXRpb25FcnJvcl9qcy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX3F1aS05YTgxNWFcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMDQ1YjdhYTMwN2I0NWVjZWZlNjRiMDdhZjc0MWZmNzUuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX2dyYXBoaWNzX2RhdGFfRmVhdHVyZVN0b3JlX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzJiMzlmNGI1Mzk4ZDk0MmI5ZmU0OTE1NDUxNzViYjdkLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2dlb21ldHJ5X3N1cHBvcnRfbm9ybWFsaXplVXRpbHNfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlXy00MTY1ZGVcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZDVmODIxOThhZTk2ODZlODJhYTQwN2Q4ZDk4ZjcxZWYuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfdmlld3Nfd2ViZ2xfZW51bXNfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNGIwNDg4YTE2NGE0MmIxYjk1NjY3NzBmMmI5NTE2MzEuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfc3VwcG9ydF9idWZmZXJfQnVmZmVyVmlld19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy84NjQ4OGM5NmFlN2RhZDg2MWQzM2VhN2UzMzg4MTRhYS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9nZW9tZXRyeV9zdXBwb3J0X0luZGljZXNfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzMtOGVlOTU1XCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2ZkMTJjOTdhOTIwNWUyZGMyYzRhNzczNmYxYzAxNmJjLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzNkX3dlYmdsLWVuZ2luZV9saWJfZWRnZVJlbmRlcmluZ19lZGdlUHJvY2Vzc2luZ19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9hZmUyYTRlYjRiNWUxYjE0NTcyMGJhYThlNWJmNzFmZi5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX3ZlYzJmNjRfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzNkX3dlYmdsLWVuZ2luZV9saWItODllMjQ3XCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzhjYTVjOWQ1OTI1NzQwYTc3MjM3YzYzYmRkMjIxYjc1LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19tYXQzX2pzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jaHVua3NfcXVhdF9qcy1ub2RlXy01MmExOWVcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMWRkMmZlYmM3M2ZjZGFkYjc4ZmU2NWVlNzI4MDZiNjkuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfc3VwcG9ydF9tZXNoVXRpbHNfZ2VvcmVmZXJlbmNlX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2FjOWZiZTEwZGJlNDU0NzcxZjZkNTRmNWVhYTI2NmU5LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19tYXQzZjY0X2pzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jaHVua3NfbWF0NGY2NF9qcy1kMTRhY2ZcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvN2Y1NDk4N2U1YjhiOWZkYzAwODA4MGRkYTBmODhiMDMuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfdmlld3NfaW50ZXJhY3RpdmVfc25hcHBpbmdfZmVhdHVyZVNvdXJjZXNfZmVhdHVyZVNlcnZpY2VTb3VyLTQ3N2Y5ZVwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9mZTgyYTA2ZWQzYjIxMzBhZDc5NjNiNjM1YzBkMWI2Yy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9nZW9tZXRyeV9zdXBwb3J0X25vcm1hbGl6ZVV0aWxzX2pzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV8tYjYzNDE1XCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzcxMWJhYzEzOWM0ZGZjOTc1ZDAwNjI1NGNlNzBiMmFlLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19ncmFwaGljc19zb3VyY2VzX2dlb2pzb25fR2VvSlNPTlNvdXJjZVdvcmtlcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy80MzViNGEwMmRjNmQ0NThjMDY2OGE1YzE2MzkxYTY0OS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX3N1cHBvcnRfTGVyY1dvcmtlcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy82MWM1NmM1YjI3ZTBhOTBhZDgwMzViNWFjODIzOTE2MS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfZ3JhcGhpY3Nfc291cmNlc19zdXBwb3J0X01lbW9yeVNvdXJjZVdvcmtlcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8zYzAzYTM2NTdkY2VmZWQ5YzQwZGY2NDA4ZjNkODg5ZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWV3c18zZF9zdXBwb3J0X1BCRkRlY29kZXJXb3JrZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvYjk3ODEwZTYyOTdkMzIxZDM3N2E1ZDYwYWZmYjhhYjMuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfc3ltYm9sc19jaW1fZW51bXNfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzJkX2VuZ2luLTI2OWFiNFwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9lNzc2YjZlNmY3ZmI2ODliMmRlYzhlN2ExYmM4YjQ0Yy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfb2djX29nY0ZlYXR1cmVVdGlsc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9iMzEwZDRjNzM3Y2Y2NjNlMDJiZDA2ZTdiOGNlZDNhNC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfZ3JhcGhpY3Nfc291cmNlc19jb25uZWN0aW9uc19jcmVhdGVDb25uZWN0aW9uX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2RmNGJkODUxZjQyOGVjNzcxNjIyNDY2YTcxNWNhNWQyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzJkX2xheWVyc19mZWF0dXJlc19QaXBlbGluZV9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8wOWEwMTdhN2RmNTA1NmUyZjI1MjM1NjQwZWYwYzQwYS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jaHVua3NfcXVhdGYzMl9qcy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX3ZlYzNmMzJfanMtMzFmZDZlXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzQyZDEyM2ZhNDcwMDBjZTQ3Y2UwNmFhMjYyYjk1YmZiLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3JlbmRlcmVyc19Qb2ludENsb3VkQ2xhc3NCcmVha3NSZW5kZXJlcl9qcy1ub2RlX21vZHVsZXNfYXJjZy0xOGM4YWVcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvYWM2OTJkZjM0NDllYTNjNTZiNDk5NmRiZGNkNzYxNzEuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfdmlld3NfM2RfbGF5ZXJzX1BvaW50Q2xvdWRXb3JrZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvODBhZTExZWQ4ZmM4MWI1MGFkODNhOTkxNTg5MmM4NDMuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX3N1cHBvcnRfcmFzdGVyRm9ybWF0c19SYXN0ZXJDb2RlY19qcy1ub2RlX21vZHVsZXNfYXJjLThiZjdkMlwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9jNTg3OTBkYWZkNTllZmIwNTlmMzE1NTkzM2JkNTE3OS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfc3VwcG9ydF9yYXN0ZXJGdW5jdGlvbnNfcmFzdGVyRnVuY3Rpb25IZWxwZXJfanMtbm9kZV8tZmY4NjI4XCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzNmZGFkZDUwMzRhYjBlMGE3MWU4YzZkMjkwYjdkYzgyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfc3VwcG9ydF9SYXN0ZXJXb3JrZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZWUzYzZmODU3NGEyOTM4NzFhODY5OWNlMGNkMzlkMjcuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX3NwaGVyZV9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy83YWUyZGU1MjczMDVlODQ4MzIzYzM1ZjE0NDFhZTQyMi5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWV3c19pbnRlcmFjdGl2ZV9zbmFwcGluZ19mZWF0dXJlU291cmNlc19zY2VuZUxheWVyU291cmNlX1MtMjU1ZjBiXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2E5NzA1M2QyZjFmNTQ4NjI2ODY1OTNhMWJmNzk5ODhmLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzNkX2xheWVyc19TY2VuZUxheWVyV29ya2VyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzIyZDc5OGFiMjlkYTg3YmNmYzVjNGI1ZjkyZDkzZWM5LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19vZ2Nfd2ZzVXRpbHNfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvODUzZjViOGNiZDAyNTBhNTg5Nzg2ZTk1NjdhYjEzNzEuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19ncmFwaGljc19zb3VyY2VzX1dGU1NvdXJjZVdvcmtlcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy82NDZmM2Q0ZGUxZTUwOTE2ODNiMjk1N2Q4YTNiZDJmYy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9nZW9tZXRyeV9zdXBwb3J0X1RpbGVDbGlwcGVyX2pzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWUtNjE0MGFlXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzE3ODM3N2NiMGQ0NTk2NTg2MDgwZDY1ZGYyM2IxMTRlLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzJkX2VuZ2luZV92ZWN0b3JUaWxlc19zdHlsZV9TdHlsZVJlcG9zaXRvcnlfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvYTI4NGU4ZmU1ZWI0MWRjYzljNDMzOGRmYjkzNzk3ZTEuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX2VhcmN1dF9qcy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY29yZV9CaWRpRW5naW5lX2pzLWQzZTZiMlwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9jMzA1MTZkZGEyNDQwNTllOWJhZDdmNDQxNTY5YTZhMC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWV3c18yZF9lbmdpbmVfdmVjdG9yVGlsZXNfV29ya2VyVGlsZUhhbmRsZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMWJkZjNiNjhlNmE3YTMxNzM5NWVhMTQ5MDg5YmZkM2IuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2dlb21ldHJ5X3N1cHBvcnRfbm9ybWFsaXplVXRpbHNfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19zLTkzMzczZFwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9jNGViYWNmOWFkYWFiZTEwOWFmNTVjMGNlY2FlNzEzOC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfcG9ydGFsX3N1cHBvcnRfbGF5ZXJzTG9hZGVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2M0NGZlMDRjZGM3MzA2NWMxNjlkYWJkZjg2OWQwNzU4LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9wb3J0YWxfc3VwcG9ydF9yZXNvdXJjZVV0aWxzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzU1NzNhYTkxMTdjNTcyMDdhYjFhNjNhMDFhZmRkZDBiLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9nZW9tZXRyeV9nZW9tZXRyeUFkYXB0ZXJzX2h5ZHJhdGVkX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzBkZjgxZTJkYmQzYWM4ZjE3MmVjN2ExZGI2MjYxMjg1LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19wZS13YXNtX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzRiZDhjNjZjYTBhNTg2MGRmM2RiMzYzMzhlNzhjM2RhLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfZ3JhcGhpY3Nfc291cmNlc19zdXBwb3J0X3VwbG9hZEFzc2V0c19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9hMGJmM2E3ZWVjYmI4MzVkNDhlMzk0OWM0ODM4MGY5ZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jaHVua3NfcXVhdGY2NF9qcy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX3ZlYzMyX2pzLW4tNGM1ZDZiXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzUyYjBlZTFkNzNlZTI5NTc0MTg5MmY3YWQ3NzVmMWZhLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9yZXN0X3F1ZXJ5X2V4ZWN1dGVSZWxhdGlvbnNoaXBRdWVyeV9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy82NWNmNTk1MGQ5YzAzODFmOGE5YjVhM2IzYjk3NTcyNC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfcmVzdF9xdWVyeV9vcGVyYXRpb25zX3F1ZXJ5QXR0YWNobWVudHNfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMzAyODRiMzMzNjczNGM1ZjljYWYzMTJmNzkyOTRjNjguanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3Jlc3RfcXVlcnlfZXhlY3V0ZVRvcEZlYXR1cmVzUXVlcnlfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZWI2ZWNmZTE4NTU0ZmFkMmI4Y2IzM2ZlMTMzZjE2ZjUuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3Jlc3RfcXVlcnlfZXhlY3V0ZUZvclRvcElkc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8xNjZmYjIwZmU1ZmIwMzYyNWVmM2RhYzdiYjllNGQzYy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfcmVzdF9xdWVyeV9leGVjdXRlRm9yVG9wRXh0ZW50c19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9kZDYxY2FkOGUyZTA1YzNhNDUxYWJkNjUyNDZmOWZkOC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfcmVzdF9xdWVyeV9leGVjdXRlRm9yVG9wQ291bnRfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNDAwYzhjZjgzM2I5ZWZjZTA5MWNkN2JjNzRhMzdmZDkuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzJkOTY2OTg1Y2ZmNDg5NTI1NWE1ZjVmZWFkODFlNjk0LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2FyY2FkZV9mdW5jdGlvbnNfZ2VvbWFzeW5jX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzkwNGVjNmU2MzUwNmNjZGE0YjEzZTkwMGUwMjJiZDBiLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2FyY2FkZV9hcmNhZGVBc3luY1J1bnRpbWVfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZWEyNTdkZGZkYzYwZTRhYWU2ZDM1ZmQ0NDE4NzRmNWIuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfYXJjYWRlX2ZlYXR1cmVzZXRfYWN0aW9uc19TcGF0aWFsRmlsdGVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2FkOThmMDM1YjUyMWRkNDZkMWRlZmI3MmM1Y2M4ZDA2LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19TdWJ0eXBlR3JvdXBMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9hYzVkNjk5OGU0NjEwZTc1Y2UxZmU3MjVhY2JlNDliZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9hcmNhZGVfZmVhdHVyZVNldFV0aWxzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzBmZTUxNjRiZmRmMTIwNTM0M2I1MGFiM2MxZDJhYmFhLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2FyY2FkZV9mdW5jdGlvbnNfZmVhdHVyZXNldGJhc2VfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvOGIxN2JhMmFhMTFmNDAwN2UwZDBjMTZiMWQzZWM4MmQuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2FyY2FkZV9mdW5jdGlvbnNfZmVhdHVyZXNldGdlb21fanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvYWE5NDI2Y2I5YjlmODdmMDFmOWVhYjM3MDY0OTI0MmMuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2FyY2FkZV9mdW5jdGlvbnNfZmVhdHVyZXNldHN0YXRzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzIyY2U3MDZlOTE0YjlhYmVkNmIxODVhZjdkZDk3ZmQ3LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9hcmNhZGVfZnVuY3Rpb25zX2ZlYXR1cmVzZXRzdHJpbmdfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMWY3ODFmYjU2YWMyNWZmOTQ3ZDRkZjY1ODMyZjBhMDYuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19zdXBwb3J0X2xheWVyc0NyZWF0b3JfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvOGVmMGI1MDA2ZWVlN2E2ZjUxYzUzMTU1MDk3MTFlMGEuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX3N1cHBvcnRfRWxldmF0aW9uUXVlcnlfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZGRmNDZkY2EzMTU0Y2RmMDEyZjFmZTllZTYxODhlODIuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfc3RlbmNpbF9jb3JlX2ludGVybmFsX2NsaWVudF9zaGFkb3ctY3NzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzI2YzFjNDI4YWIzYzlmNzllODJjMTY4ODllZjVjMTEyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19Hcm91cExheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2E4ZDdkYmIwMDJlY2YwYTMzNGM3NmQ1NGM0YzUwMDRkLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19CaW5nTWFwc0xheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzczZjlhYmQ2NWI0NzhiZTNiMWVjZDA4MDNkNjllMzUxLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19taXhpbnNfU2NlbmVTZXJ2aWNlX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzcyNjc2MjFmNGZjNWNkZjI1MGJkMjEzZmUxNGE1MDc3LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19zdXBwb3J0X0ZldGNoQXNzb2NpYXRlZEZlYXR1cmVMYXllcl9qcy1ub2RlX21vZHVsZXNfYS1lNGQ3ZTZcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZjZkYzY1NjVkNTJlOTU5YTI0ZTU3ZDMwOWU1OTE4Y2YuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX0J1aWxkaW5nU2NlbmVMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9iNjk5YmY3YzNkZDljYjNkNzliNzI3OTgxZDJlZTU3ZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfQ1NWTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNmQ3NWZkZjdlMzdlNTZiODdiMDhlMWZlZTZkZGM1OGQuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX0RpbWVuc2lvbkxheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2Y3NDc4ZTVkYWY3NTdiY2IxNTQ0MmE1MTQwZDk5MmZmLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19HZW9KU09OTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMmU1NjA0YTYzOWY3MWQzNWNjZjJmZWY4MzMxMzE4NTMuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19HZW9SU1NMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8zZDI0MzYxNTRkNTNlNWNlOWI5OTA1NzhiYjc2ZmRkMy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfc3VwcG9ydF9NdWx0aWRpbWVuc2lvbmFsU3Vic2V0X2pzLW5vZGVfbW9kdWxlc19hcmNnaXMtZWQ5Y2FhXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzZkM2ZmMjZkMWU3NjhiYWQxODIyNjZmZDg2ODFkYWM1LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19JbWFnZXJ5TGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvYTdiNTNiNWU5NTY2Y2NhMTEyZjdmYTQ2Mjk3YzY4ZTkuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfc3VwcG9ydF9ub3JtYWxpemVVdGlsc19qcy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfLTlhZjg4M1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy80OTgxN2E2YmQyOTBjMjhmZGU0MWQ2OGRjNjc1NjRjYy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfSW50ZWdyYXRlZE1lc2hMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy81NGM1ODFhMjc4NjA4OThkMDEzZTdlZDE0NjUwNzRiNS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfS01MTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvYWZmMmRkMWI5ZWU4NjIyMjk4ZjI5MTU2YTNjODRkMDUuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX0xpbmVPZlNpZ2h0TGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvOWYxYzdmZDhiMTRkMmI1N2RjZDBjYmU1NjgyZDk2NTQuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfc3VwcG9ydF9ub3JtYWxpemVVdGlsc19qcy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfLWRiMTY5MVwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8wODk3YjViYjZjZTM1YjlkOTQyYTEzNzBmOWY5NzllZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jb3JlX2xvYWRBbGxfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19taXhpbnNfQXJjR0ktNWVhOTNmXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzI5YWUyNzk3MjkzYjQwZDk2YWE2ZTRiYTY4OTUyODE1LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19NYXBJbWFnZUxheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2VjMmI2ODE0ODQ0NjI5MWQ4OGRhNTZkZDZkYTcxZmRkLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19NYXBOb3Rlc0xheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzU2YjM5OTQ5OGI5NmRiMmNjOWZjZjM1OTYzN2M1YzVjLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19NZWRpYUxheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzdhZjJmZTc0Njc5OWU3MDJmNjQyZDU3MmJhODhlYzI5LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19PR0NGZWF0dXJlTGF5ZXJfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19nci05NjQ3MzZcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNDQ2ZTc3ZTU4MGU4YmVmMjUwMDk1OGU3OWZjNjViMTUuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX1dlYlRpbGVMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9lMDBlYjRjMmNlNmM1N2ZlMzdkNzVmMDBiMGEyYTNiOS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX09wZW5TdHJlZXRNYXBMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy82MzkzZmMxMDI0YzBmZDM0OWIwMTc2NDNhYmU5ZTMxMC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX09yaWVudGVkSW1hZ2VyeUxheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzNhM2UwNjg2MGE3YjAxMzQ1MDRjZWFjN2E4YjlmNDc2LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19Qb2ludENsb3VkTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNjk4NWRhZmRlNDUxMTI5YjA2ZmI2ZjU2OTUyOTliYjcuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX1JvdXRlTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMGI2YjU5ZmFmNzAwZWUyOGIwM2FjMmVjZGNlM2JiN2MuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX1NjZW5lTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvOWExODQ5M2M4NzIyMjdjZjA2ZjE0Y2E5YmRlMTdlNjkuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX1N0cmVhbUxheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzFkMWJkZmUxMjQzMzQzMTNjY2ZlNjNlNDJjZTEyZWM2LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19UaWxlTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMjFjODEwOTc1NzUzODZkZWQzZjE1YzM1YTI4MDZiZjIuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19Vbmtub3duTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvN2JiYWY1MTczMDQ0M2UyNjkzN2E5OTZmODIxYThjM2YuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19VbnN1cHBvcnRlZExheWVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzYzOGI1MDk5NTQwZWMzZDcwYTRjM2FmZTM0YzA2NDY1LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19WZWN0b3JUaWxlTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNzAxOWNmYWEzOTI5NTMyMzJkYjQzNDlhZmFhZDhhOGYuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX1ZveGVsTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZDJkNTVhMjgwM2MwMDY4Y2E5NDZmMDFmYzQyYjQxMzcuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX1dGU0xheWVyX2pzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfZ3JhcGhpY3NfLThlNGEzNVwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8yMWU4OTY0MTQ2YzZlNTQ5NDgxYTUyMzE0NTNhYmExNy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9sYXllcnNfV01TTGF5ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvM2VlOGNiNTZlYWY4ZDdjN2YzODVhODQ4MDUxY2YzN2YuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX1dNVFNMYXllcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9lOGUyNjBhOGNjNTRjNGU0ZmEzMWNlNzQ4MjU2ODAxMy5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVKU09OX2pzLV85OTdlMVwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy82MTE2ZWE5OTJlYjIwNDhjYjdiMWYwZGI3Njg3MDJlZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfdmlld3NfMmRfbGF5ZXJzX2ZlYXR1cmVzX3Byb2Nlc3NvcnNfSGVhdG1hcFByb2Nlc3Nvcl9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9jMzAyZDVjMWFiODBkYWZjMzVhMmNjNDU0NzE0MDY2ZC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWV3c18yZF9sYXllcnNfZmVhdHVyZXNfcHJvY2Vzc29yc19TeW1ib2xQcm9jZXNzb3JfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZGE3MGFjYzNjZDFmNTdlOTg3YzQyOTllNjAzMzIxZTAuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc19zdXBwb3J0X2xhYmVsRm9ybWF0VXRpbHNfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvN2E5YmRiYmJiYjdjMjdkMjUxOGRhMjMwYWNkMzFmOWEuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzJkX2xheWVyc19mZWF0dXJlc19zdXBwb3J0X0ZlYXR1cmVGaWx0ZXJfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvMDE2YWU3MWVjZThkYjVjMDZhMDA0OWFkNzFhMjBjNjcuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19sZXJjLXdhc21fanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvNzE4MDQ5N2RmMDI0ZDJhZGY0OTVmZjZjZTc0OTRiZWYuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX2kzc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9lNTUwYTU1N2QyMDg0Yjk5NWQ5N2ExZjdhZDVjNzZjNi5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jaHVua3NfbGlidGVzcy1hc21fanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvOGJmYTk5YWFiZjQyNzQ3ZWI1NzQyMTJjODY3OWQ0OTguanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwibm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19saWJ0ZXNzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzI4ZjJlMjRmZjQxMWQwYTZiZmQ2ZjU1YjAyMDMzODk0LmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2dlb21ldHJ5X3N1cHBvcnRfbWVzaFV0aWxzX2V4cG9ydGVyc19nbHRmX2dsdGZleHBvcnRfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvZDA5NTZjZGVhMGMxNGVlZjBiMzQ4ZjYyODJlNzI5ZjEuanNcIjtcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfY2h1bmtzX3ZlYzIyX2pzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jaHVua3NfdmVjMzNfanMtbm9kLTU2YTg4ZFwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8xN2JlMmNjMTJhNjdkMzBhZTBmMjFkYjI2MDAwOGZmNS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfc3VwcG9ydF9tZXNoVXRpbHNfbG9hZEdMVEZNZXNoX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzM5MjIzNDVhOWZiYTdiYTgxYWFmMDJkMzdjZDFjNTJlLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9zeW1ib2xzX3N1cHBvcnRfc3ltYm9sTGF5ZXJVdGlsc19qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy85MTk0MWU1OGIxZmI2NTg5Mzk3NmEyYzAwOTgzNmZlMi5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVKU09OX2pzLV85OTdlMFwiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9iNmZkMmFlNjhlODc1MjM0ZmIxMWVkNWI3YjYxZDY3ZC5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV9jaHVua3NfYXJjZ2lzLWtub3dsZWRnZS1jbGllbnQtY29yZS1zaW1kX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzRkODg0ZGMyNGEwNjdmMmY0YzYzMGEzNTliNDg4YmUzLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19hcmNnaXMta25vd2xlZGdlLWNsaWVudC1jb3JlX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzBlMWEwMGI1MDU2YjczMDBhN2ZjN2ExOGY4YTVlMzkxLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19sY2xheW91dF9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9iZjdlMjBiOWVjMmFiODhiYTY5YjA3NGFhYzY3ZDhkZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfbGF5ZXJzX2dyYXBoaWNzX09wdGltaXplZEZlYXR1cmVfanMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2xheWVyc18tZTc1NjkwXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzhkYjhiZWE0NDI2ZTdlN2NjYWMzNGNjODJkOWRhMGFhLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWV3c18yZF9sYXllcnNfZmVhdHVyZXNfY3JlYXRlU3ltYm9sU2NoZW1hX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2U1YzVmOWMzZmMzOTJkNDM4M2FmNzk4YmViZjI4ZDAyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX3ZpZXdzXzNkX2xheWVyc19ncmFwaGljc19vYmplY3RSZXNvdXJjZVV0aWxzX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2I5YjNhMjU1ZjdmMGE4Y2Q1Y2IxZTM4NzliNGYyMDgyLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FyY2dpc19jb3JlX2NodW5rc19iYXNpc190cmFuc2NvZGVyX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzLzA4NDUxZGQyYTAzNjQyZWY5NTBhMWQwY2QyZDM1ODdmLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWV3c18zZF93ZWJnbC1lbmdpbmVfc2hhZGVyc19EZWZhdWx0TWF0ZXJpYWxfZ2xzbF9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy8zYmRjYzZhZWE2NDNkYWVmMGFjYWZkMjJjNDVkMjM1NS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfdmlld3NfM2Rfd2ViZ2wtZW5naW5lX3NoYWRlcnNfU1NBT0JsdXJfZ2xzbF9qc1wiKSByZXR1cm4gXCJ3aWRnZXRzL2NodW5rcy9hNDg5NGRkOGNkNDllMDE4NzRkMDBlNTgxOTFiOWQ0ZS5qc1wiO1xuXHRpZiAoY2h1bmtJZCA9PT0gXCJub2RlX21vZHVsZXNfYXJjZ2lzX2NvcmVfdmlld3NfM2Rfd2ViZ2wtZW5naW5lX3NoYWRlcnNfU1NBT19nbHNsX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL2M4NmZjMDNjMDMwNGY1ZDE2NTNiYzRkZjVjYjg5MzcwLmpzXCI7XG5cdGlmIChjaHVua0lkID09PSBcIm5vZGVfbW9kdWxlc19hcmNnaXNfY29yZV92aWV3c18zZF93ZWJnbC1lbmdpbmVfc2hhZGVyc19SZWFsaXN0aWNUcmVlX2dsc2xfanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvM2UyYzJjNDA1ZDI0MjVmMmMyMjAyM2U5ZDM0ZTM4YjguanNcIjtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJleGItY2xpZW50OlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwid2lkZ2V0cy92b2lyaWUvZGlzdC9ydW50aW1lL3dpZGdldFwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXhiX2NsaWVudFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleGJfY2xpZW50XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyB8IG51bGxcbiAgcHJvamVjdHM6IEFycmF5PHsgbmFtZTogc3RyaW5nLCBpZDogc3RyaW5nIH0+XG4gIHNlbGVjdGVkUHJvamVjdElkOiBzdHJpbmcgfCBudWxsXG4gIHByb2plY3ROYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIElTdGF0ZT4ge1xuICBwcml2YXRlIHJlYWRvbmx5IG15UmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpXG5cbiAgY29uc3RydWN0b3IgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgamltdU1hcFZpZXc6IG51bGwsXG4gICAgICBwcm9qZWN0czogW10sXG4gICAgICBzZWxlY3RlZFByb2plY3RJZDogbnVsbCxcbiAgICAgIHByb2plY3ROYW1lOiAnJ1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnV2lkZ2V0IGNvbnN0cnVjdG9yIGluaXRpYWxpemVkJylcbiAgfVxuXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gYXN5bmMgKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgY2FsbGVkJywgam12KVxuXG4gICAgaWYgKGptdikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGppbXVNYXBWaWV3OiBqbXZcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IFtGZWF0dXJlTGF5ZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBpbXBvcnQoJ0BhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyJylcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGFjdGl2ZUxheWVycyA9IGptdi52aWV3Lm1hcC5sYXllcnMudG9BcnJheSgpXG4gICAgICBjb25zdCBzZXRQcm9qZWN0cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbiAgICAgIC8vIExvZyB0aGUgZmVhdHVyZXMgb2YgZWFjaCBsYXllclxuICAgICAgYWN0aXZlTGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgICAgIGlmIChsYXllci50eXBlID09PSAnZmVhdHVyZScpIHtcbiAgICAgICAgICAobGF5ZXIgYXMgSW5zdGFuY2VUeXBlPHR5cGVvZiBGZWF0dXJlTGF5ZXIuZGVmYXVsdD4pLnF1ZXJ5RmVhdHVyZXMoKS50aGVuKChmZWF0dXJlU2V0KSA9PiB7XG4gICAgICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgICAgc2V0UHJvamVjdHMuYWRkKGZlYXR1cmUuYXR0cmlidXRlcy5wcm9qZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCBwcm9qZWN0cyBmcm9tIHNldFByb2plY3RzXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgcHJvamVjdHM6IEFycmF5LmZyb20oc2V0UHJvamVjdHMpLm1hcCgocHJvamVjdCkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0LFxuICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0cyB1cGRhdGVkOicsIHRoaXMuc3RhdGUucHJvamVjdHMpXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBxdWVyeWluZyBmZWF0dXJlcyBvZiBsYXllciAke2xheWVyLnRpdGxlfTpgLCBlcnJvcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHsgbmFtZTogdGhpcy5zdGF0ZS5wcm9qZWN0TmFtZSwgaWQ6IHRoaXMuc3RhdGUucHJvamVjdE5hbWUgfVxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBwcm9qZWN0czogWy4uLnByZXZTdGF0ZS5wcm9qZWN0cywgbmV3UHJvamVjdF0sXG4gICAgICBwcm9qZWN0TmFtZTogJycsXG4gICAgICBzZWxlY3RlZFByb2plY3RJZDogbmV3UHJvamVjdC5pZFxuICAgIH0pKVxuICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0IGFkZGVkOicsIG5ld1Byb2plY3QpXG4gIH1cblxuICByZW1vdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByZXZTdGF0ZS5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgIHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gcHJldlN0YXRlLnNlbGVjdGVkUHJvamVjdElkXG4gICAgICApXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0czogdXBkYXRlZFByb2plY3RzLFxuICAgICAgICBzZWxlY3RlZFByb2plY3RJZDogdXBkYXRlZFByb2plY3RzLmxlbmd0aCA+IDAgPyB1cGRhdGVkUHJvamVjdHNbMF0uaWQgOiBudWxsXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnUHJvamVjdCByZW1vdmVkJylcbiAgfVxuXG4gIGhhbmRsZVByb2plY3ROYW1lQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9qZWN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgY29uc29sZS5sb2coJ1Byb2plY3QgbmFtZSBjaGFuZ2VkOicsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RTZWxlY3Rpb25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFByb2plY3RJZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgY29uc29sZS5sb2coJ1Byb2plY3Qgc2VsZWN0ZWQ6JywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgb25GZWF0dXJlRWRpdCA9IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjcmVhdGUnICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICAgIGV2ZW50LmZlYXR1cmUuYXR0cmlidXRlcy5wcm9qZXQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvamVjdElkXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBjc3MgPSBgXG4gICAgLmVzcmktZWRpdG9yX19zY3JvbGxlciB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG9cbiAgICAgICAgcGFkZGluZy10b3A6ICRjYXAtc3BhY2luZy0taGFsZlxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGNhcC1zcGFjaW5nXG4gICAgICB9XG4gICAgICAuZXNyaS1lZGl0b3JfX2NvbnRlbnQtZ3JvdXAge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxZW1cbiAgICAgIH1cbiAgICBgXG5cbiAgICBsZXQgbXZjID0gPHA+UGxlYXNlIHNlbGVjdCBhIG1hcC48L3A+XG5cbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5wcm9wcywgJ3VzZU1hcFdpZGdldElkcycpICYmXG4gICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF1cbiAgICApIHtcbiAgICAgIG12YyA9IChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRMYXllcnMgamltdS13aWRnZXQgcC0yXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPkNyZWF0ZSBhIE5ldyBQcm9qZWN0PC9oMz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2plY3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvamVjdE5hbWVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2plY3QgbmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkUHJvamVjdH0+QWRkIFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPlNlbGVjdCBhIFByb2plY3Q8L2gzPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvamVjdElkIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJvamVjdFNlbGVjdGlvbkNoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+U2VsZWN0IGEgcHJvamVjdDwvb3B0aW9uPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwcm9qZWN0LmlkfSB2YWx1ZT17cHJvamVjdC5pZH0+e3Byb2plY3QubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yZW1vdmVQcm9qZWN0fSBkaXNhYmxlZD17IXRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9qZWN0SWR9PlxuICAgICAgICAgICAgUmVtb3ZlIFByb2plY3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLm15UmVmfT5cbiAgICAgICAgICA8c3R5bGU+e2Nzc308L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge212Y31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==