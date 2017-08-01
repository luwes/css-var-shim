onCssVarMap({
	"setVars": [
		[
			"--spacing-unit",
			"6px",
			0,
			":root",
			0
		],
		[
			"--margins",
			"2",
			0,
			":root",
			0
		],
		[
			"--primary-color",
			"#5E35B1",
			0,
			":root",
			0
		],
		[
			"--secondary-color",
			"#FF00FF",
			0,
			":root",
			0
		],
		[
			"--primary-color-text",
			"#FFF",
			0,
			":root",
			0
		],
		[
			"--grid-columns",
			"3",
			0,
			":root",
			0
		],
		[
			"--margin-size",
			"(var(--margins) * 2)",
			0,
			":root",
			0
		],
		[
			"--cell-padding",
			"(4 * var(--spacing-unit))",
			0,
			":root",
			0
		],
		[
			"--grid-gutter",
			"(var(--margins) * var(--spacing-unit))",
			0,
			":root",
			0
		],
		[
			"--grid-margin",
			"(var(--margin-size) * var(--spacing-unit))",
			0,
			":root",
			0
		],
		[
			"--cell-margin",
			"(var(--grid-gutter) / 2)",
			0,
			":root",
			0
		]
	],
	"getVars": {
		"--margins": {
			":root": {
				"0": [
					[
						"--margin-size",
						"(var(--margins) * 2)"
					],
					[
						"--grid-gutter",
						"(var(--margins) * var(--spacing-unit))"
					]
				]
			}
		},
		"--spacing-unit": {
			":root": {
				"0": [
					[
						"--cell-padding",
						"(4 * var(--spacing-unit))"
					],
					[
						"--grid-gutter",
						"(var(--margins) * var(--spacing-unit))"
					],
					[
						"--grid-margin",
						"(var(--margin-size) * var(--spacing-unit))"
					]
				]
			},
			".header": {
				"1": [
					[
						"height",
						"calc(28 * var(--spacing-unit))"
					],
					[
						"padding-left",
						"calc(4 * var(--spacing-unit))"
					]
				]
			},
			".title": {
				"0": [
					[
						"top",
						"calc(8 * var(--spacing-unit))"
					],
					[
						"font-size",
						"calc(4 * var(--spacing-unit))"
					]
				]
			},
			".shade": {
				"0": [
					[
						"padding-left",
						"calc(1 * var(--spacing-unit))"
					],
					[
						"height",
						"calc(8 * var(--spacing-unit))"
					]
				]
			},
			".cell-title": {
				"0": [
					[
						"font-size",
						"calc(3 * var(--spacing-unit))"
					]
				]
			},
			".cell-header": {
				"0": [
					[
						"height",
						"calc(12 * var(--spacing-unit))"
					]
				]
			},
			".cell-content": {
				"0": [
					[
						"font-size",
						"calc(2.5 * var(--spacing-unit))"
					]
				]
			},
			".cell-actions": {
				"0": [
					[
						"padding",
						"calc(2 * var(--spacing-unit))"
					]
				]
			},
			".picker-button": {
				"0": [
					[
						"font-size",
						"calc(2 * var(--spacing-unit))"
					],
					[
						"padding",
						"calc(2 * var(--spacing-unit))"
					]
				]
			}
		},
		"--margin-size": {
			":root": {
				"0": [
					[
						"--grid-margin",
						"(var(--margin-size) * var(--spacing-unit))"
					]
				]
			}
		},
		"--grid-gutter": {
			":root": {
				"0": [
					[
						"--cell-margin",
						"(var(--grid-gutter) / 2)"
					]
				]
			},
			".cell": {
				"0": [
					[
						"width",
						"calc(100% / var(--grid-columns) - var(--grid-gutter))"
					]
				]
			}
		},
		"--secondary-color": {
			".header": {
				"0": [
					[
						"background-color",
						"var(--secondary-color)"
					]
				]
			}
		},
		"--primary-color": {
			".header": {
				"1": [
					[
						"background-color",
						"var(--primary-color, #5E35B1)"
					]
				]
			},
			".cell-header": {
				"0": [
					[
						"background-color",
						"var(--primary-color)"
					]
				]
			},
			".picker-button": {
				"0": [
					[
						"color",
						"var(--primary-color)"
					]
				]
			}
		},
		"--primary-color-text": {
			".title": {
				"0": [
					[
						"color",
						"var(--primary-color-text)"
					]
				]
			},
			".cell-header": {
				"0": [
					[
						"color",
						"var(--primary-color-text)"
					]
				]
			}
		},
		"--grid-margin": {
			".grid": {
				"0": [
					[
						"padding",
						"calc(var(--grid-margin) - var(--cell-margin))"
					]
				]
			}
		},
		"--cell-margin": {
			".grid": {
				"0": [
					[
						"padding",
						"calc(var(--grid-margin) - var(--cell-margin))"
					]
				]
			},
			".cell": {
				"0": [
					[
						"margin",
						"calc(var(--cell-margin))"
					]
				]
			}
		},
		"--grid-color": {
			".grid": {
				"0": [
					[
						"background-color",
						"var(--grid-color)"
					]
				]
			}
		},
		"--cell-color": {
			".cell": {
				"0": [
					[
						"background-color",
						"var(--cell-color)"
					]
				]
			}
		},
		"--grid-columns": {
			".cell": {
				"0": [
					[
						"width",
						"calc(100% / var(--grid-columns) - var(--grid-gutter))"
					]
				]
			}
		},
		"--cell-padding": {
			".cell-header": {
				"0": [
					[
						"padding-left",
						"calc(var(--cell-padding))"
					]
				]
			},
			".cell-content": {
				"0": [
					[
						"padding",
						"calc(var(--cell-padding))"
					]
				]
			}
		}
	}
});