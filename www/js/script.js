
//
var ev_envenenado_app = {

	vars: {},
	// nombre: {n:nombre completo, m:mástiles, c:cañones, m1:max1, m2:max2, dp:perfil_por_defecto}
	ev_env_barcosTipos: {
		'balandroMercante': {n: 'balandro mercante', m: '1 o 2', c: '4 a 8', m1: 1, m2: 3, dp: 8},
		'balandroGuerra': {n: 'balandro de guerra', m: '1 o 2', c: '10 a 20', m1: 3, m2: 2, dp: 8},
		'barcoMercante': {n: 'barco mercante', m: 3, c: 10, m1: 1, m2: 3, dp: 10},
		'barcoGuerra': {n: 'barco de guerra', m: 3, c: '20 a 40', m1: 3, m2: 2, dp: 10},
		'navioLineaArmadaMercante': {n: 'nav&iacute;o de l&iacute;nea de la armada mercante', m: 3, c: '40 a 60', m1: 1, m2: 3, dp: 12},
		'navioLineaArmadaGuerra': {n: 'nav&iacute;o de l&iacute;nea de la armada de guerra', m: 3, c: '40 a 60', m1: 3, m2: 2, dp: 12}
	},
	patrones: {
		'once': false,
		'patrones': {
			'Alfredo Prieto': null,
			'Rafa Aranda': null,
			'Sendel': null,
			'Summum Creator': null,
			'Luis Garc&iacute;a Castro': null,
			'Carlos J. Mart&iacute;nez Rosas': null,
			'Alberto G&oacute;mez': null
		}
	},
	mecenas: {
		'once': false,
		'mecenas': {
			'Tesoros de la Marca': {'img':'img/logo-tesoros.png', 'link': 'http://tesorosdelamarca.com/buscar?controller=search&orderby=position&orderway=desc&search_query=envenenado&submit_search=+', 'adquirir':true},
			'Dracotienda': {'img':'img/logo--dracotienda.png', 'link': 'http://www.dracotienda.com/envenenados-fantasmas-asesinos-p-13373.html', 'adquirir':true},
			'RolGratis': {'img':'img/logo-rolgratis.png', 'link': 'http://rolgratis.org', 'adquirir':false},
			'Summum Creator': {'img':'img/logo-summum.png', 'link': 'http://www.summumcreator.es', 'adquirir':false}
		}
	},


	initialize: function () {
		// binding events
		this.appendPanel();
		document.addEventListener('deviceReady', this.onDeviceReady, false);
	//	this.onDeviceReady();	// ésto es para que inicie la app al probar el index.html en un navegador de ordenador. quitar al final
	},
	onDeviceReady: function () {
		console.log('******** evento \'onDeviceReady\' lanzado');
	//	new FastClick(document.body);
		ev_envenenado_app.portada();
		ev_envenenado_app.pj();
		ev_envenenado_app.dagaYTripulacion();
		ev_envenenado_app.enemigos();
		ev_envenenado_app.randomMecenas();
		console.log('******** Todo inicializado');
	},

	appendPanel: function () {
		$(document).on('pagebeforeshow', '[data-role="page"]', function (event) {
			var pageId = $.mobile.activePage.attr('id');
			var panel = document.getElementById('ev-main-panel');
			var activePage = document.getElementById(pageId);
			panel.parentNode.removeChild(panel);
			activePage.appendChild(panel);
			$.mobile.activePage.find('#ev-main-panel').panel();
		});
	},

	portada: function () {
		if (ev_envenenado_app.patrones.once) return;
		ev_envenenado_app.patrones.once = true;
		var patronesArray = [];
		var patronesString = '';
		for (var i in ev_envenenado_app.patrones.patrones) patronesArray.push(i);
		ev_env_shuffle_array(patronesArray);
		for (var i = 0; i < patronesArray.length; i++) {
			patronesString	+=	patronesArray[i]
			if (ev_envenenado_app.patrones.patrones[patronesArray[i]]) patronesString	+=	' (<a href="#" onclick="openLink(\'' + ev_envenenado_app.patrones.patrones[patronesArray[i]] + '\')" >'
																						 +	ev_envenenado_app.patrones.patrones[patronesArray[i]]
																						 +	'</a>)';
			if (i < (patronesArray.length-2)) patronesString += ', ';
			else if (i < (patronesArray.length-1)) patronesString += ' y ';
			else patronesString += '.';
		}
		var divPatrones = document.getElementById('ev-envenenados-lista-patrones');
		divPatrones.innerHTML = patronesString;
		var divPatrones2 = document.getElementById('ev-envenenados-lista-patrones2');
		divPatrones2.innerHTML = patronesString;
		console.log('******** Portada inicilizada');
	},

	pj: function () {
		$('#ev-pj').on('pagebeforeshow', function (event) {
			if (ev_envenenado_app.pj_once) return;
			ev_envenenado_app.pj_once = true;
			ev_envenenado_app.vars.pj = {
				'nombre': '',
				'segundoACargo': false,
				'cargo': 'Contramaestre',
				'pecados': {
					'adulterio': 0,
					'asesinato': 0,
					'blasfemia': 0,
					'idolatria': 0,
					'motin': 0,
					'robo': 0,
					'sodomia': 0,
					'violacion': 0
				},
				'infortunios': {
					'arrestado': 0,
					'condenado': 0,
					'encarcelado': 0,
					'intentodeasesinato': 0,
					'latigazos': 0,
					'maldito': 0,
					'marcado': 0,
					'mutilado': 0,
					'paliza': 0,
					'repudiado': 0,
					'reclutadoalafuerza': 0,
					'torturado': 0,
					'violado': 0
				},
				'ambiciones': {
					'sercapitan': false,
					'tenertierras': false,
					'serperdonado': false,
					'vivirparasiempre': false,
					'serrecordadoparasiempre': false,
					'seradmiradoporlasociedad': false,
					'vengarsedealguien': false,
					'vengarsedealguiendemejorposicion': false,
					'fornicarconelpiratadeotrojugador': false,
					'fornicarconhijaohijodealguiendemejorposicion': false,
					'escupiralacaradedios': false,
					'escupiralacaradeldiablo': false
				},
				'perfil': {
					'cuchillo': false,
					'espada': false,
					'pistola': false,
					'select1': '',
					'select2': ''
				},
				'mutilacion': {
					'select': null,
					'input': ''
				}
			};

			// nombre
			ev_env_textInput(	document.getElementsByName('ev-pj-form-nombre')[0],
								['pj', 'nombre'],
								document.getElementById('ev-pj-resultado-nombre'));
			// cargo
			var selectCargo = document.getElementsByName('ev-pj-form-cargo')[0];
			var divResCargo = document.getElementById('ev-pj-resultado-cargo');
			if (ev_envenenado_app.vars.pj.cargo) {
				selectCargo.value = ev_envenenado_app.vars.pj.cargo;
				$('select[name="ev-pj-form-cargo"]').selectmenu();
				$('select[name="ev-pj-form-cargo"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.pj.cargo = selectCargo.value;
			divResCargo.innerHTML = selectCargo.value;
			selectCargo.addEventListener('change', function () {
				ev_envenenado_app.vars.pj.cargo = this.value;
				divResCargo.innerHTML = this.value;
			}, false);
			// segundo a cargo
			var cbSegundoACargo = $('#ev-pj-form-segundoacargo');
			cbSegundoACargo.checkboxradio();
			if (ev_envenenado_app.vars.pj.segundoACargo) {
				cbSegundoACargo.prop('checked', true).checkboxradio('refresh');
			}
			else cbSegundoACargo.prop('checked', false).checkboxradio('refresh');
			cbSegundoACargo.change(function () {
				if (this.checked) {
					ev_envenenado_app.vars.pj.segundoACargo = true;
					cbSegundoACargo.prop('checked', true).checkboxradio('refresh');
				}
				else {
					ev_envenenado_app.vars.pj.segundoACargo = false;
					cbSegundoACargo.prop('checked', false).checkboxradio('refresh');
				}
				ev_env_segundoACargo();
			});
			ev_env_segundoACargo();
			// pecados, diablo y alma
			var pecados = ['adulterio', 'asesinato', 'blasfemia', 'idolatria', 'motin', 'robo', 'sodomia', 'violacion'];
			for (var i = 0; i < pecados.length; i++) ev_env_doubleCheckboxPecados(pecados[i]);
			ev_env_pecadosResult();
			ev_env_diabloAlma();
			// infortunios y brutalidad
			var infortunios = [
				'arrestado',
				'condenado',
				'encarcelado',
				'intentodeasesinato',
				'latigazos',
				'maldito',
				'marcado',
				'mutilado',
				'paliza',
				'repudiado',
				'reclutadoalafuerza',
				'torturado',
				'violado'
			];
			for (var i = 0; i < infortunios.length; i++) ev_env_doubleCheckboxInfortunios(infortunios[i]);
			ev_env_infortuniosResult();
			ev_env_brutalidad();
			// ambiciones y temeridad
			var ambiciones = [
				'sercapitan',
				'tenertierras',
				'serperdonado',
				'vivirparasiempre',
				'serrecordadoparasiempre',
				'seradmiradoporlasociedad',
				'vengarsedealguien',
				'vengarsedealguiendemejorposicion',
				'fornicarconelpiratadeotrojugador',
				'fornicarconhijaohijodealguiendemejorposicion',
				'escupiralacaradedios',
				'escupiralacaradeldiablo'
			];
			for (var i = 0; i < ambiciones.length; i++) ev_env_checkboxAmbiciones(ambiciones[i]);
			ev_env_ambicionesResult();
			ev_env_ambicion();
			ev_env_temeridad();
			// perfil
			var perfil = ['cuchillo', 'espada', 'pistola'];
			for (var i = 0; i < perfil.length; i++) ev_env_perfilCheckbox(perfil[i]);
			var perfilSelect = ['select1', 'select2'];
			for (var i = 0; i < perfilSelect.length; i++) ev_env_perfilSelect(perfilSelect[i]);
			ev_env_perfilResult();
			ev_env_perfil();
			// perfil. mutilación
			ev_env_displayMutilacion();
			var selectMutilacion = document.getElementsByName('ev-pj-form-mutilacion-select')[0];
			var inputOtra = document.getElementsByName('ev-pj-form-mutilacion-input')[0];
			if (ev_envenenado_app.vars.pj.mutilacion.select) {
				selectMutilacion.value = ev_envenenado_app.vars.pj.mutilacion.select;
				$('select[name="ev-pj-form-mutilacion-select"]').selectmenu();
				$('select[name="ev-pj-form-mutilacion-select"]').selectmenu('refresh', true);
			}
			selectMutilacion.addEventListener('change', function () {
				ev_envenenado_app.vars.pj.mutilacion.select = this.value;
				if ('otra' == ev_envenenado_app.vars.pj.mutilacion.select) inputOtra.style.display = '';
				else inputOtra.style.display = 'none';
			}, false);
			if (ev_envenenado_app.vars.pj.mutilacion.select != 'otra') inputOtra.style.display = 'none';
			if (ev_envenenado_app.vars.pj.mutilacion.input) inputOtra.value = ev_envenenado_app.vars.pj.mutilacion.input;
			inputOtra.addEventListener('change', function () {
				ev_envenenado_app.vars.pj.mutilacion.input = this.value;
			}, false);
			console.log('******** PJ inicializado');
			console.dir({pj: ev_envenenado_app.vars.pj});
		});
	},

	dagaYTripulacion: function () {
		$('#ev-daga-tripulacion').on('pagebeforeshow', function (event) {
			if (ev_envenenado_app.dt_once) return;
			ev_envenenado_app.dt_once = true;
			ev_envenenado_app.vars.dt = {
				'daga': {
					'select1': '',
					'select2': '',
					'puntoFuerte': '',
					'perfil': 0
				},
				'tripulacion': {
					'select1': '',
					'select2': '',
					'select3': '',
					'perfil': 0
				}
			};

			// daga. select1
			var selectDaga1 = document.getElementsByName('ev-dt-daga-form-select1')[0];
			if (ev_envenenado_app.vars.dt.daga.select1) {
				selectDaga1.value = ev_envenenado_app.vars.dt.daga.select1;
				$('select[name="ev-dt-daga-form-select1"]').selectmenu();
				$('select[name="ev-dt-daga-form-select1"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.dt.daga.select1 = selectDaga1.value;
			selectDaga1.addEventListener('change', function () {
				ev_envenenado_app.vars.dt.daga.select1 = this.value;
				ev_env_dagaPerfil();
			}, false);
			// daga. select2
			var selectDaga2 = document.getElementsByName('ev-dt-daga-form-select2')[0];
			if (ev_envenenado_app.vars.dt.daga.select2) {
				selectDaga2.value = ev_envenenado_app.vars.dt.daga.select2;
				$('select[name="ev-dt-daga-form-select2"]').selectmenu();
				$('select[name="ev-dt-daga-form-select2"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.dt.daga.select2 = selectDaga2.value;
			selectDaga2.addEventListener('change', function () {
				ev_envenenado_app.vars.dt.daga.select2 = this.value;
				ev_env_dagaPerfil();
			}, false);
			// daga. punto fuerte
			var selectPuntoFuerte = document.getElementsByName('ev-dt-daga-form-puntofuerte')[0];
			if (ev_envenenado_app.vars.dt.daga.puntoFuerte) {
				selectPuntoFuerte.value = ev_envenenado_app.vars.dt.daga.puntoFuerte;
				$('select[name="ev-dt-daga-form-puntofuerte"]').selectmenu();
				$('select[name="ev-dt-daga-form-puntofuerte"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.dt.daga.puntoFuerte = selectPuntoFuerte.value;
			selectPuntoFuerte.addEventListener('change', function () {
				ev_envenenado_app.vars.dt.daga.puntoFuerte = this.value;
				ev_env_dagaPerfil();
			}, false);
			ev_env_dagaPerfil();
			// tripulacion. select1
			var selectTrip1 = document.getElementsByName('ev-dt-tripulacion-form-select1')[0];
			if (ev_envenenado_app.vars.dt.tripulacion.select1) {
				selectTrip1.value = ev_envenenado_app.vars.dt.tripulacion.select1;
				$('select[name="ev-dt-tripulacion-form-select1"]').selectmenu();
				$('select[name="ev-dt-tripulacion-form-select1"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.dt.tripulacion.select1 = selectTrip1.value;
			selectTrip1.addEventListener('change', function () {
				ev_envenenado_app.vars.dt.tripulacion.select1 = this.value;
				ev_env_tripulacionPerfil();
			}, false);
			// tripulacion. select2
			var selectTrip2 = document.getElementsByName('ev-dt-tripulacion-form-select2')[0];
			if (ev_envenenado_app.vars.dt.tripulacion.select2) {
				selectTrip2.value = ev_envenenado_app.vars.dt.tripulacion.select2;
				$('select[name="ev-dt-tripulacion-form-select2"]').selectmenu();
				$('select[name="ev-dt-tripulacion-form-select2"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.dt.tripulacion.select2 = selectTrip2.value;
			selectTrip2.addEventListener('change', function () {
				ev_envenenado_app.vars.dt.tripulacion.select2 = this.value;
				ev_env_tripulacionPerfil();
			}, false);
			// tripulacion. select3
			var selectTrip3 = document.getElementsByName('ev-dt-tripulacion-form-select3')[0];
			if (ev_envenenado_app.vars.dt.tripulacion.select3) {
				selectTrip3.value = ev_envenenado_app.vars.dt.tripulacion.select3;
				$('select[name="ev-dt-tripulacion-form-select3"]').selectmenu();
				$('select[name="ev-dt-tripulacion-form-select3"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.dt.tripulacion.select3 = selectTrip3.value;
			selectTrip3.addEventListener('change', function () {
				ev_envenenado_app.vars.dt.tripulacion.select3 = this.value;
				ev_env_tripulacionPerfil();
			}, false);
			ev_env_tripulacionPerfil();
			console.log('******** Daga y tripulación inicializado');
			console.dir({daga: ev_envenenado_app.vars.dt});
		});
	},

	enemigos: function () {
		$('#ev-enemigos').on('pagebeforeshow', function (event) {
			if (ev_envenenado_app.enem_once) return;
			ev_envenenado_app.enem_once = true;
			ev_envenenado_app.vars.enemigos = {
				'pnj': {
					'nombre': '',
					'cargo': '',
					'dado1': 0,
					'dado2': 0,
					'dadoElegido': 1,
					'temeridad': null,
					'perfil1': '',
					'perfil2': '',
					'perfil3': '',
					'debil': false,
					'discapacidad': '',
					'perfil': 0
				},
				'grupos': {
					'nombre': '',
					'select1': null,
					'select2': null,
					'select3': null,
					'select4': null,
					'select5': null,
					'select6': null,
					'perfil': 0
				},
				'barcos': {
					'nombre': '',
					'tipo': null,
					'mastiles': 0,
					'canones': 0,
					'max1': 0,
					'max2': 0,
					'defPerfil': 0,
					'cbGrupo1': {
						'tieneunamacabrareputacion': false,
						'esimponente': false,
						'esafortunada': false,
						'esdesolidamanufactura': false,
						'esrapida': false,
						'estafuertementearmada': false,
						'esmaniobrable': false
					},
					'cbGrupo2': {
						'estasobrecargada': false,
						'esfragil': false,
						'tienefugas': false,
						'estapobrementearmada': false,
						'estavieja': false,
						'lefaltatripulacion': false,
						'eslenta': false
					}
				},
				'fortalezas': {
					'nombre': '',
					'cbGrupo1': {
						'tieneunabuenaposicion': false,
						'tieneunamacabrareputacion': false,
						'esdesolidaconstruccion': false,
						'estafuertementearmada': false,
						'esimponente': false
					},
					'cbGrupo2': {
						'essolodemaderayladrillosinpiedra': false,
						'esaccesibledesdecualquierlado': false,
						'estapobrementearmada': false,
						'estavieja': false,
						'lefaltanhombres': false
					},
					'perfil': 12
				}
			};
			// pnj - nombre
			ev_env_textInput(	document.getElementsByName('ev-enemigos-pnj-form-nombre')[0],
								['enemigos', 'pnj', 'nombre'],
								document.getElementById('ev-enemigos-pnj-resultado-nombre'));
			// pnj - cargo
			ev_env_textInput(	document.getElementsByName('ev-enemigos-pnj-form-cargo')[0],
								['enemigos', 'pnj', 'cargo'],
								document.getElementById('ev-enemigos-pnj-resultado-cargo'));
			// pnj - temeridad
			if (0 == ev_envenenado_app.vars.enemigos.pnj.dado1) ev_envenenado_app.vars.enemigos.pnj.dado1 = Math.ceil(Math.random() * 6);
			if (0 == ev_envenenado_app.vars.enemigos.pnj.dado2) ev_envenenado_app.vars.enemigos.pnj.dado2 = Math.ceil(Math.random() * 6);
			var dado1 = document.getElementById('ev-enemigos-pnj-form-temeridad-1');
			var dado2 = document.getElementById('ev-enemigos-pnj-form-temeridad-2');
			dado1.style.backgroundImage = 'url("img/dice/' + ev_envenenado_app.vars.enemigos.pnj.dado1 + 'd6.png")';
			dado2.style.backgroundImage = 'url("img/dice/' + ev_envenenado_app.vars.enemigos.pnj.dado2 + 'd6.png")';
			dado1.className = 'ev-enemigos-dado-normal';
			dado2.className = 'ev-enemigos-dado-descartado';
			dado1.addEventListener('click', function () {
				ev_envenenado_app.vars.enemigos.pnj.dadoElegido = 1;
				this.className = 'ev-enemigos-dado-normal';
				dado2.className = 'ev-enemigos-dado-descartado';
				ev_env_enemigosPnjTemeridad();
			}, false);
			dado2.addEventListener('click', function () {
				ev_envenenado_app.vars.enemigos.pnj.dadoElegido = 2;
				this.className = 'ev-enemigos-dado-normal';
				dado1.className = 'ev-enemigos-dado-descartado';
				ev_env_enemigosPnjTemeridad();
			}, false);
			ev_env_enemigosPnjTemeridad();
			// pnj - perfil 1
			var selectPnjPerfil1 = document.getElementsByName('ev-enemigos-pnj-form-perfil1')[0];
			if (ev_envenenado_app.vars.enemigos.pnj.perfil1) {
				selectPnjPerfil1.value = ev_envenenado_app.vars.enemigos.pnj.perfil1;
				$('select[name="ev-enemigos-pnj-form-perfil1"]').selectmenu();
				$('select[name="ev-enemigos-pnj-form-perfil1"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.enemigos.pnj.perfil1 = selectPnjPerfil1.value;
			selectPnjPerfil1.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.pnj.perfil1 = this.value;
				ev_env_enemigosPnj();
			}, false);
			// pnj - perfil 2
			var selectPnjPerfil2 = document.getElementsByName('ev-enemigos-pnj-form-perfil2')[0];
			if (ev_envenenado_app.vars.enemigos.pnj.perfil2) {
				selectPnjPerfil2.value = ev_envenenado_app.vars.enemigos.pnj.perfil2;
				$('select[name="ev-enemigos-pnj-form-perfil2"]').selectmenu();
				$('select[name="ev-enemigos-pnj-form-perfil2"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.enemigos.pnj.perfil2 = selectPnjPerfil2.value;
			selectPnjPerfil2.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.pnj.perfil2 = this.value;
				ev_env_enemigosPnj();
			}, false);
			// pnj - perfil 3
			var selectPnjPerfil3 = document.getElementsByName('ev-enemigos-pnj-form-perfil3')[0];
			if (ev_envenenado_app.vars.enemigos.pnj.perfil3) {
				selectPnjPerfil3.value = ev_envenenado_app.vars.enemigos.pnj.perfil3;
				$('select[name="ev-enemigos-pnj-form-perfil3"]').selectmenu();
				$('select[name="ev-enemigos-pnj-form-perfil3"]').selectmenu('refresh', true);
			}
			else ev_envenenado_app.vars.enemigos.pnj.perfil3 = selectPnjPerfil3.value;
			selectPnjPerfil3.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.pnj.perfil3 = this.value;
				ev_env_enemigosPnj();
			}, false);
			// pnj - débil
			var checkboxPnjDebil = $('#ev-enemigos-pnj-form-debil');
			var value = checkboxPnjDebil[0].value;
			checkboxPnjDebil.checkboxradio();
			if (ev_envenenado_app.vars.enemigos.pnj.debil) checkboxPnjDebil.prop('checked', true).checkboxradio('refresh');
			else checkboxPnjDebil.prop('checked', false).checkboxradio('refresh');
			checkboxPnjDebil.change(function () {
				if (this.checked) {
					ev_envenenado_app.vars.enemigos.pnj.debil = true;
					checkboxPnjDebil.prop('checked', true).checkboxradio('refresh');
				}
				else {
					ev_envenenado_app.vars.enemigos.pnj.debil = false;
					checkboxPnjDebil.prop('checked', false).checkboxradio('refresh');
				}
				ev_env_enemigosPnjDebil();
			});
			ev_env_enemigosPnjDebil();
			// pnj - discapacidad
			ev_env_textInput(	document.getElementsByName('ev-enemigos-pnj-form-discapacidad')[0],
								['enemigos', 'pnj', 'discapacidad'],
								document.getElementById('ev-enemigos-pnj-resultado-debil-discapacidad'),
								function () {
									ev_envenenado_app.vars.enemigos.pnj.discapacidad = this.value;
									ev_env_enemigosPnjDebil();
								});
			ev_env_enemigosPnj();
			// grupos - nombre
			ev_env_textInput(	document.getElementsByName('ev-enemigos-grupos-form-nombre')[0],
								['enemigos', 'grupos', 'nombre'],
								document.getElementById('ev-enemigos-grupos-resultado-nombre'));
			// grupos - select1
			var selectGruposSelect1 = document.getElementsByName('ev-enemigos-grupos-form-select1')[0];
			if (!ev_envenenado_app.vars.enemigos.grupos.select1) ev_envenenado_app.vars.enemigos.grupos.select1 = selectGruposSelect1.value;
			else {
				selectGruposSelect1.value = ev_envenenado_app.vars.enemigos.grupos.select1;
				$('select[name="ev-enemigos-grupos-form-select1"]').selectmenu();
				$('select[name="ev-enemigos-grupos-form-select1"]').selectmenu('refresh', true);
			}
			selectGruposSelect1.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.grupos.select1 = this.value;
				ev_env_enemigosGrupos();
			}, false);
			// grupos - select2
			var selectGruposSelect2 = document.getElementsByName('ev-enemigos-grupos-form-select2')[0];
			if (!ev_envenenado_app.vars.enemigos.grupos.select2) ev_envenenado_app.vars.enemigos.grupos.select2 = selectGruposSelect2.value;
			else {
				selectGruposSelect2.value = ev_envenenado_app.vars.enemigos.grupos.select2;
				$('select[name="ev-enemigos-grupos-form-select2"]').selectmenu();
				$('select[name="ev-enemigos-grupos-form-select2"]').selectmenu('refresh', true);
			}
			selectGruposSelect2.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.grupos.select2 = this.value;
				ev_env_enemigosGrupos();
			}, false);
			// grupos - select3
			var selectGruposSelect3 = document.getElementsByName('ev-enemigos-grupos-form-select3')[0];
			if (!ev_envenenado_app.vars.enemigos.grupos.select3) ev_envenenado_app.vars.enemigos.grupos.select3 = selectGruposSelect3.value;
			else {
				selectGruposSelect3.value = ev_envenenado_app.vars.enemigos.grupos.select3;
				$('select[name="ev-enemigos-grupos-form-select3"]').selectmenu();
				$('select[name="ev-enemigos-grupos-form-select3"]').selectmenu('refresh', true);
			}
			selectGruposSelect3.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.grupos.select3 = this.value;
				ev_env_enemigosGrupos();
			}, false);
			// grupos - select4
			var selectGruposSelect4 = document.getElementsByName('ev-enemigos-grupos-form-select4')[0];
			if (!ev_envenenado_app.vars.enemigos.grupos.select4) ev_envenenado_app.vars.enemigos.grupos.select4 = selectGruposSelect4.value;
			else {
				selectGruposSelect4.value = ev_envenenado_app.vars.enemigos.grupos.select4;
				$('select[name="ev-enemigos-grupos-form-select4"]').selectmenu();
				$('select[name="ev-enemigos-grupos-form-select4"]').selectmenu('refresh', true);
			}
			selectGruposSelect4.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.grupos.select4 = this.value;
				ev_env_enemigosGrupos();
			}, false);
			// grupos - select5
			var selectGruposSelect5 = document.getElementsByName('ev-enemigos-grupos-form-select5')[0];
			if (!ev_envenenado_app.vars.enemigos.grupos.select5) ev_envenenado_app.vars.enemigos.grupos.select5 = selectGruposSelect5.value;
			else {
				selectGruposSelect5.value = ev_envenenado_app.vars.enemigos.grupos.select5;
				$('select[name="ev-enemigos-grupos-form-select5"]').selectmenu();
				$('select[name="ev-enemigos-grupos-form-select5"]').selectmenu('refresh', true);
			}
			selectGruposSelect5.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.grupos.select5 = this.value;
				ev_env_enemigosGrupos();
			}, false);
			// grupos - select6
			var selectGruposSelect6 = document.getElementsByName('ev-enemigos-grupos-form-select6')[0];
			if (!ev_envenenado_app.vars.enemigos.grupos.select6) ev_envenenado_app.vars.enemigos.grupos.select6 = selectGruposSelect6.value;
			else {
				selectGruposSelect6.value = ev_envenenado_app.vars.enemigos.grupos.select6;
				$('select[name="ev-enemigos-grupos-form-select6"]').selectmenu();
				$('select[name="ev-enemigos-grupos-form-select6"]').selectmenu('refresh', true);
			}
			selectGruposSelect6.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.grupos.select6 = this.value;
				ev_env_enemigosGrupos();
			}, false);
			ev_env_enemigosGrupos();
			// barcos - nombre
			ev_env_textInput(
				document.getElementsByName('ev-enemigos-barcos-form-nombre')[0],
				['enemigos', 'barcos', 'nombre'],
				document.getElementById('ev-enemigos-barcos-resultado-nombre')
			);
			// barcos - tipo
			var selectBarcosTipo = document.getElementsByName('ev-enemigos-barcos-form-tipo')[0];
			if (!ev_envenenado_app.vars.enemigos.barcos.tipo) ev_envenenado_app.vars.enemigos.barcos.tipo = selectBarcosTipo.value;
			else {
				selectBarcosTipo.value = ev_envenenado_app.vars.enemigos.barcos.tipo;
				$('select[name="ev-enemigos-barcos-form-tipo"]').selectmenu();
				$('select[name="ev-enemigos-barcos-form-tipo"]').selectmenu('refresh', true);
			}
			selectBarcosTipo.addEventListener('change', function () {
				ev_envenenado_app.vars.enemigos.barcos.tipo = this.value;
				ev_env_enemigosBarcos(ev_envenenado_app.vars.enemigos.barcos.tipo);
				ev_env_enemigosBarcosCheckboxReset();
			}, false);
			ev_env_enemigosBarcos(ev_envenenado_app.vars.enemigos.barcos.tipo);
			// barcos - checkboxes
			var barcos_checkbox_list_1 = [
				'tieneunamacabrareputacion',
				'esimponente',
				'esafortunada',
				'esdesolidamanufactura',
				'esrapida',
				'estafuertementearmada',
				'esmaniobrable'
			];
			ev_env_enemigosBarcosCheckboxList(barcos_checkbox_list_1, 1);
			var barcos_checkbox_list_2 = [
				'estasobrecargada',
				'esfragil',
				'tienefugas',
				'estapobrementearmada',
				'estavieja',
				'lefaltatripulacion',
				'eslenta'
			];
			ev_env_enemigosBarcosCheckboxList(barcos_checkbox_list_2, 2);
			ev_env_enemigosBarcosCheckboxResult();
			// fortalezas - nombre
			ev_env_textInput(
				document.getElementsByName('ev-enemigos-fortalezas-form-nombre')[0],
				['enemigos', 'fortalezas', 'nombre'],
				document.getElementById('ev-enemigos-fortalezas-resultado-nombre')
			);
			// fortalezas - checkboxes
			var fortalezas_checkbox_list_1 = [
				'tieneunabuenaposicion',
				'tieneunamacabrareputacion',
				'esdesolidaconstruccion',
				'estafuertementearmada',
				'esimponente',
			];
			ev_env_fortalezasCheckboxList(fortalezas_checkbox_list_1, 1, 3);
			var fortalezas_checkbox_list_2 = [
				'essolodemaderayladrillosinpiedra',
				'esaccesibledesdecualquierlado',
				'estapobrementearmada',
				'estavieja',
				'lefaltanhombres'
			];
			ev_env_fortalezasCheckboxList(fortalezas_checkbox_list_2, 2, 2);
			ev_env_fortalezasCheckboxResult();
			console.log('******** Enemigos inicializado');
		});
	},

	randomMecenas: function () {
		$(document).bind('pagecreate', '#ev-adquirir', function (event, data) {
			var mecenasArray = [];
			var mecenasPortadaApoyoString = '';
			var mecenasAdquirirString = '';
			for (var i in ev_envenenado_app.mecenas.mecenas) mecenasArray.push(i);
			ev_env_shuffle_array(mecenasArray);
			for (var i = 0; i < mecenasArray.length; i++) {
				// mecenas en portada y apoyo
				mecenasPortadaApoyoString += '<a class="ui-link" href="' + ev_envenenado_app.mecenas.mecenas[mecenasArray[i]].link + '" >'
										   + '<img src="' + ev_envenenado_app.mecenas.mecenas[mecenasArray[i]].img + '" class="portada-btn" title="' + mecenasArray[i] + '" alt="' + mecenasArray[i] + '">'
										   + '</a>';
				// mecenas en adquirir
				if (ev_envenenado_app.mecenas.mecenas[mecenasArray[i]].adquirir) {
					mecenasAdquirirString += '<div class="centrar btn-adquirir">'
										   + '<a href="' + ev_envenenado_app.mecenas.mecenas[mecenasArray[i]].link + '" data-role="button" target="_blank">'
										   + '<img src="' + ev_envenenado_app.mecenas.mecenas[mecenasArray[i]].img + '" title="' + mecenasArray[i] + '" alt="' + mecenasArray[i] + '"   />'
										   + '</a>'
										   + '</div>';
				}
			}
			//
			document.getElementById('ev-envenenados-lista-mecenas-portada').innerHTML = mecenasPortadaApoyoString;
			document.getElementById('ev-envenenados-lista-mecenas-adquirir').innerHTML = mecenasAdquirirString;
			document.getElementById('ev-envenenados-lista-mecenas-apoyo').innerHTML = mecenasPortadaApoyoString;
		});
	}

};


ev_envenenado_app.initialize();

