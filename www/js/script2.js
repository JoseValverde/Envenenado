
//	--------------------------------

function openLink (url) {
	var ref = window.open(url, '_system', 'location=yes');
}


//
function ev_env_panelButton (id) {
	$('#ev-main-panel').panel('close');
	setTimeout(function () {
		$(':mobile-pagecontainer').pagecontainer('change', '#'+id, {transition: 'none'});
	}, 192);
}




//	--------------------------------

function ev_env_textInput (formElm, valueVar, resElm, funct) {
	var defaultValue = null;
	switch (valueVar.length) {
		case 1: defaultValue = ev_envenenado_app.vars[valueVar[0]]; break;
		case 2: defaultValue = ev_envenenado_app.vars[valueVar[0]][valueVar[1]]; break;
		case 3: defaultValue = ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]]; break;
		case 4: defaultValue = ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]][valueVar[3]]; break;
		default: break;
	}
	if (defaultValue != 'undefined') {
		formElm.value = defaultValue;
		resElm.innerHTML = defaultValue;
	}
	if ('undefined' == typeof(funct)) {
		formElm.addEventListener('change', function () {
			switch (valueVar.length) {
				case 1: ev_envenenado_app.vars[valueVar[0]] = this.value; break;
				case 2: ev_envenenado_app.vars[valueVar[0]][valueVar[1]] = this.value; break;
				case 3: ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]] = this.value; break;
				case 4: ev_envenenado_app.vars[valueVar[0]][valueVar[1]][valueVar[2]][valueVar[3]] = this.value; break;
				default: break;
			}
			resElm.innerHTML = this.value;
		}, false);
	}
	else formElm.addEventListener('change', funct, false);
}


function ev_env_segundoACargo () {
	elmRes = document.getElementById('ev-pj-resultado-segundoacargo');
	var resStr = '';
	if (ev_envenenado_app.vars.pj.segundoACargo) resStr = ', segundo a cargo';
	elmRes.innerHTML = resStr;
}


function ev_env_doubleCheckboxPecados (p) {
	var doubleCheckbox = document.getElementById('ev-pj-form-pecados-' + p);

	doubleCheckbox.addEventListener('click', function () {
		ev_envenenado_app.vars.pj.pecados[p]++;
		ev_env_pecadosResult();
		if (3 == ev_envenenado_app.vars.pj.pecados[p]) ev_envenenado_app.vars.pj.pecados[p] = 0;
		this.className = 'ev-double-checkbox ev-double-checkbox-pecados-' + ev_envenenado_app.vars.pj.pecados[p];
		ev_env_diabloAlma();
		ev_env_temeridad();
	}, false);
}

function ev_env_pecadosResult () {
	var names = {
		'adulterio': 'adulterio',
		'asesinato': 'asesinato',
		'blasfemia': 'blasfemia',
		'idolatria': 'idolatr&iacute;a',
		'motin': 'mot&iacute;n',
		'robo': 'robo',
		'sodomia': 'sodom&iacute;a',
		'violacion': 'violaci&oacute;n'
	};
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.pecados) if (ev_envenenado_app.vars.pj.pecados[i] != 0) resArray.push(names[i]);
	if (!resArray.length) resArray.push('Ninguno');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-pecados'));
}


function ev_env_diabloAlma () {
	ev_envenenado_app.vars.pj.diablo = 0;
	for (var i in ev_envenenado_app.vars.pj.pecados) if (ev_envenenado_app.vars.pj.pecados[i] > 0) ev_envenenado_app.vars.pj.diablo++;
	if (ev_envenenado_app.vars.pj.diablo < 2) ev_envenenado_app.vars.pj.diablo = 2;
	if (ev_envenenado_app.vars.pj.diablo > 6) ev_envenenado_app.vars.pj.diablo = 6;
	var divResDiablo = document.getElementById('ev-pj-resultado-diablo');
	divResDiablo.innerHTML = ev_envenenado_app.vars.pj.diablo;
	ev_envenenado_app.vars.pj.alma = 8;
	ev_envenenado_app.vars.pj.alma -= ev_envenenado_app.vars.pj.diablo;
	var divResAlma = document.getElementById('ev-pj-resultado-alma');
	divResAlma.innerHTML = ev_envenenado_app.vars.pj.alma;
}


function ev_env_doubleCheckboxInfortunios (i) {
	var doubleCheckbox = document.getElementById('ev-pj-form-infortunios-' + i);

	doubleCheckbox.addEventListener('click', function () {
		ev_envenenado_app.vars.pj.infortunios[i]++;
		ev_env_infortuniosResult();
		if (3 == ev_envenenado_app.vars.pj.infortunios[i]) ev_envenenado_app.vars.pj.infortunios[i] = 0;
		this.className = 'ev-double-checkbox ev-double-checkbox-infortunios-' + ev_envenenado_app.vars.pj.infortunios[i];
		ev_env_brutalidad();
		ev_env_temeridad();
		ev_env_displayMutilacion();
	}, false);
}

function ev_env_infortuniosResult () {
	var names = {
		'arrestado': 'arrestado',
		'condenado': 'condenado',
		'encarcelado': 'encarcelado',
		'intentodeasesinato': 'intento de asesinato',
		'latigazos': 'latigazos',
		'maldito': 'maldito',
		'marcado': 'marcado',
		'mutilado': 'mutilado',
		'paliza': 'paliza',
		'repudiado': 'repudiado',
		'reclutadoalafuerza': 'reclutado a la fuerza',
		'torturado': 'torturado',
		'violado': 'violado'
	};
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.infortunios) {
		if (ev_envenenado_app.vars.pj.infortunios[i] != 0) {
			if (1 == ev_envenenado_app.vars.pj.infortunios[i]) resArray.push(names[i]);
			if (2 == ev_envenenado_app.vars.pj.infortunios[i]) resArray.push(names[i] + ' (X)');
		}
	}
	if (!resArray.length) resArray.push('Ninguno');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-infortunios'));
}


function ev_env_brutalidad () {
	ev_envenenado_app.vars.pj.brutalidad = 0;
	ev_envenenado_app.vars.pj.xxx = '';
	for (var i in ev_envenenado_app.vars.pj.infortunios) if (ev_envenenado_app.vars.pj.infortunios[i] > 0) {
		ev_envenenado_app.vars.pj.brutalidad++;
		if (2 == ev_envenenado_app.vars.pj.infortunios[i]) ev_envenenado_app.vars.pj.xxx += 'X';
	}
	if (ev_envenenado_app.vars.pj.brutalidad < 2) ev_envenenado_app.vars.pj.brutalidad = 2;
	if (ev_envenenado_app.vars.pj.brutalidad > 6) ev_envenenado_app.vars.pj.brutalidad = 6;
	var divResBrutalidad = document.getElementById('ev-pj-resultado-brutalidad');
	divResBrutalidad.innerHTML = ev_envenenado_app.vars.pj.brutalidad;
	var divResXXX = document.getElementById('ev-pj-resultado-xxx');
	divResXXX.innerHTML = ev_envenenado_app.vars.pj.xxx;
}


function ev_env_checkboxAmbiciones (a) {
	var id = '#ev-pj-form-ambiciones-' + a;
	var divForm = $(id);
	var divResult = document.getElementById('ev-pj-resultado-ambiciones-' + a);
	var value = divForm[0].value;
	divForm.checkboxradio();
	if (ev_envenenado_app.vars.pj.ambiciones[a]) divForm.prop('checked', true).checkboxradio('refresh');
	else divForm.prop('checked', false).checkboxradio('refresh');
	divForm.change(function () {
		if (this.checked) {
			ev_envenenado_app.vars.pj.ambiciones[a] = true;
			divForm.prop('checked', true).checkboxradio('refresh');
			ev_env_ambicionesResult();
		}
		else {
			ev_envenenado_app.vars.pj.ambiciones[a] = false;
			divForm.prop('checked', false).checkboxradio('refresh');
			ev_env_ambicionesResult();
		}
		ev_env_ambicion();
		ev_env_temeridad();
	});
}

function ev_env_ambicionesResult () {
	var names = {
		'sercapitan': 'ser capit&aacute;n',
		'tenertierras': 'tener tierras',
		'serperdonado': 'ser perdonado',
		'vivirparasiempre': 'vivir para siempre',
		'serrecordadoparasiempre': 'ser recordado para siempre',
		'seradmiradoporlasociedad': 'ser admirado por la sociedad',
		'vengarsedealguien': 'vengarme de alguien',
		'vengarsedealguiendemejorposicion': 'vengarme de alguien de mejor posici&oacute;n',
		'fornicarconelpiratadeotrojugador': 'fornicar con el pirata de otro jugador',
		'fornicarconhijaohijodealguiendemejorposicion': 'fornicar con hija o hijo de alguien de mejor posici&oacute;n',
		'escupiralacaradedios': 'escupir a la cara de dios',
		'escupiralacaradeldiablo': 'escupir a la cara del diablo'
	};
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.ambiciones) if (ev_envenenado_app.vars.pj.ambiciones[i]) resArray.push(names[i]);
	if (!resArray.length) resArray.push('Ninguna');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-ambiciones'));
}


function ev_env_ambicion () {
	ev_envenenado_app.vars.pj.ambicion = 0;
	for (var i in ev_envenenado_app.vars.pj.ambiciones) if (ev_envenenado_app.vars.pj.ambiciones[i]) ev_envenenado_app.vars.pj.ambicion++;
	if (ev_envenenado_app.vars.pj.ambicion < 2) ev_envenenado_app.vars.pj.ambicion = 2;
	if (ev_envenenado_app.vars.pj.ambicion > 6) ev_envenenado_app.vars.pj.ambicion = 6;
	document.getElementById('ev-pj-resultado-ambicion').innerHTML = ev_envenenado_app.vars.pj.ambicion;
}


function ev_env_temeridad () {
	ev_envenenado_app.vars.pj.temeridad = 0;
	ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.alma;
	if (ev_envenenado_app.vars.pj.temeridad < ev_envenenado_app.vars.pj.diablo) ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.diablo;
	if (ev_envenenado_app.vars.pj.temeridad < ev_envenenado_app.vars.pj.brutalidad) ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.brutalidad;
	if (ev_envenenado_app.vars.pj.temeridad < ev_envenenado_app.vars.pj.ambicion) ev_envenenado_app.vars.pj.temeridad = ev_envenenado_app.vars.pj.ambicion;
	document.getElementById('ev-pj-resultado-temeridad').innerHTML = ev_envenenado_app.vars.pj.temeridad;
}


function ev_env_perfilCheckbox (p) {
	var id = '#ev-pj-form-perfil-' + p;
	var divForm = $(id);
	var value = divForm[0].value;
	divForm.checkboxradio();
	if (ev_envenenado_app.vars.pj.perfil[p]) {
		divForm.prop('checked', true).checkboxradio('refresh');
		ev_env_perfilResult();
	}
	else divForm.prop('checked', false).checkboxradio('refresh');
	if (ev_envenenado_app.vars.pj.perfil[p]) ;
	divForm.change(function () {
		if (this.checked) {
			ev_envenenado_app.vars.pj.perfil[p] = true;
			divForm.prop('checked', true).checkboxradio('refresh');
		}
		else {
			ev_envenenado_app.vars.pj.perfil[p] = false;
			divForm.prop('checked', false).checkboxradio('refresh');
		}
		ev_env_perfilResult();
		ev_env_perfil();
	});
}


function ev_env_perfilSelect (ps) {
	var select = document.getElementsByName('ev-pj-form-perfil-' + ps)[0];
	if (ev_envenenado_app.vars.pj.perfil[ps]) {
		select.value = ev_envenenado_app.vars.pj.perfil[ps];
		$('select[name="ev-pj-form-perfil-'+ps+'"]').selectmenu();
		$('select[name="ev-pj-form-perfil-'+ps+'"]').selectmenu('refresh', true);
	}
	else ev_envenenado_app.vars.pj.perfil[ps] = select.value;
	select.addEventListener('change', function () {
		ev_envenenado_app.vars.pj.perfil[ps] = this.value;
		ev_env_perfilResult();
		ev_env_perfil();
	}, false);
}

function ev_env_perfilResult () {
	var resArray = [];
	for (var i in ev_envenenado_app.vars.pj.perfil) {
		if ('boolean' == typeof(ev_envenenado_app.vars.pj.perfil[i])) if (ev_envenenado_app.vars.pj.perfil[i]) resArray.push(i);
		if ('string' == typeof(ev_envenenado_app.vars.pj.perfil[i])) if ('' != ev_envenenado_app.vars.pj.perfil[i]) resArray.push(ev_envenenado_app.vars.pj.perfil[i]);
	}
	if (!resArray.length) resArray.push('Nada');
	ev_env_showArray(resArray, document.getElementById('ev-pj-resultado-perfil'));
}


function ev_env_perfil () {
	ev_envenenado_app.vars.pj.puntosPerfil = 2;
	for (var i in ev_envenenado_app.vars.pj.perfil) if (ev_envenenado_app.vars.pj.perfil[i]) ev_envenenado_app.vars.pj.puntosPerfil++;
	document.getElementById('ev-pj-resultado-perfil-puntosperfil').innerHTML = ev_envenenado_app.vars.pj.puntosPerfil;
}


function ev_env_displayMutilacion () {
	var div = document.getElementById('ev-pj-div-mutilacion');
	if (ev_envenenado_app.vars.pj.infortunios.mutilado > 0) div.style.display = 'block';
	else div.style.display = 'none';
}




// DAGA Y TRIPULAC.
function ev_env_dagaPerfil () {
	var resArray = [];
	var perfil = 8;
	if (ev_envenenado_app.vars.dt.daga.select1) { perfil++; resArray.push(ev_envenenado_app.vars.dt.daga.select1); }
	if (ev_envenenado_app.vars.dt.daga.select2) { perfil++; resArray.push(ev_envenenado_app.vars.dt.daga.select2); }
	ev_envenenado_app.vars.dt.daga.perfil = perfil;
	document.getElementById('ev-dt-daga-resultado-perfildelbarco').innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-dt-daga-resultado'));
	//
	var str2 = '';
	if (ev_envenenado_app.vars.dt.daga.puntoFuerte) str2 = 'El punto fuerte de La Daga es ' + ev_envenenado_app.vars.dt.daga.puntoFuerte + '.'; 
	document.getElementById('ev-dt-daga-resultado-puntofuerte').innerHTML = str2;
}


function ev_env_tripulacionPerfil () {
	var resArray = [];
	var perfil = 5;
	var str = '';
	var str2 = '';
	if (ev_envenenado_app.vars.dt.tripulacion.select1) { perfil++; resArray.push(ev_envenenado_app.vars.dt.tripulacion.select1); }
	if (ev_envenenado_app.vars.dt.tripulacion.select2) { perfil++; resArray.push(ev_envenenado_app.vars.dt.tripulacion.select2); }
	if (ev_envenenado_app.vars.dt.tripulacion.select3) { perfil--; str2 = 'Adem&aacute;s ' + ev_envenenado_app.vars.dt.tripulacion.select3 + '.'; }
	ev_envenenado_app.vars.dt.tripulacion.perfil = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-dt-tripulacion-resultado'));
	document.getElementById('ev-dt-tripulacion-resultado-select3').innerHTML = str2;
	document.getElementById('ev-dt-daga-resultado-perfildelatripulacion').innerHTML = perfil;
}




// ENEMIGOS
function ev_env_enemigosPnjTemeridad () {
	var elm = document.getElementById('ev-enemigos-pnj-resultado-temeridad');
	ev_envenenado_app.vars.enemigos.pnj.temeridad = ev_envenenado_app.vars.enemigos.pnj['dado'+ev_envenenado_app.vars.enemigos.pnj.dadoElegido];
	elm.innerHTML = ev_envenenado_app.vars.enemigos.pnj.temeridad;
}


function ev_env_enemigosPnj () {
	var resArray = [];
	var perfil = 2;
	if (ev_envenenado_app.vars.enemigos.pnj.perfil1) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.pnj.perfil1); }
	if (ev_envenenado_app.vars.enemigos.pnj.perfil2) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.pnj.perfil2); }
	if (ev_envenenado_app.vars.enemigos.pnj.perfil3) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.pnj.perfil3); }
	ev_envenenado_app.vars.enemigos.pnj.perfil = perfil;
	document.getElementById('ev-enemigos-pnj-resultado-perfil').innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-pnj-resultado-str'));
}


function ev_env_enemigosPnjDebil () {
	var str = '';
	if (ev_envenenado_app.vars.enemigos.pnj.debil) {
		str = 'es d&eacute;bil';
		if (ev_envenenado_app.vars.enemigos.pnj.discapacidad) str += ' y ';
	}
	if (ev_envenenado_app.vars.enemigos.pnj.discapacidad != '') str += ev_envenenado_app.vars.enemigos.pnj.discapacidad;
	if (str.length > 0) str = ev_env_capitalizeFirstLetter(str) + '.';
	document.getElementById('ev-enemigos-pnj-resultado-debil-discapacidad').innerHTML = str;
}


function ev_env_enemigosGrupos () {
	var resArray = [];
	var perfil = 5;
	if (ev_envenenado_app.vars.enemigos.grupos.select1) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select1); }
	if (ev_envenenado_app.vars.enemigos.grupos.select2) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select2); }
	if (ev_envenenado_app.vars.enemigos.grupos.select3) { perfil++; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select3); }
	if (ev_envenenado_app.vars.enemigos.grupos.select4) { perfil--; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select4); }
	if (ev_envenenado_app.vars.enemigos.grupos.select5) { perfil--; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select5); }
	if (ev_envenenado_app.vars.enemigos.grupos.select6) { perfil--; resArray.push(ev_envenenado_app.vars.enemigos.grupos.select6); }
	ev_envenenado_app.vars.enemigos.grupos.perfil = perfil;
	document.getElementById('ev-enemigos-grupos-resultado-perfil').innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-grupos-resultado-str'));
}


function ev_env_enemigosBarcos (valueVar) {
	var tipo = ev_envenenado_app.ev_env_barcosTipos[valueVar];
	ev_envenenado_app.vars.enemigos.barcos.mastiles		= tipo.m;
	ev_envenenado_app.vars.enemigos.barcos.canones		= tipo.c;
	ev_envenenado_app.vars.enemigos.barcos.max1			= tipo.m1;
	ev_envenenado_app.vars.enemigos.barcos.max2			= tipo.m2;
	ev_envenenado_app.vars.enemigos.barcos.defPerfil	= tipo.dp;
	//
	var elmMax1 = document.getElementById('ev-enemibos-barcos-resultado-max1');
	var elmMax2 = document.getElementById('ev-enemibos-barcos-resultado-max2');
	elmMax1.innerHTML = tipo.m1;
	elmMax2.innerHTML = tipo.m2;
	var str1 = 'Es un ' + tipo.n + ' de ' + tipo.m + ' m&aacute;stiles y ' + tipo.c + ' ca&ntilde;ones.';
	var elmRes1 = document.getElementById('ev-enemigos-barcos-resultado-1');
	elmRes1.innerHTML = str1;
	ev_env_enemigosBarcosCheckboxResult();
}

function ev_env_enemigosBarcosCheckboxList (list, n) {
	for (var i = 0; i < list.length; i++) ev_env_enemigosBarcosCheckbox(list[i], n);
		ev_env_enemigosBarcosCheckboxMax(n);
}
function ev_env_enemigosBarcosCheckbox (cbId, n) {
	var formElm = $('#ev-enemigos-barcos-form-' + cbId);
	formElm.checkboxradio();
	if (ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][cbId])
		formElm.prop('checked', true).checkboxradio('refresh');
	else formElm.prop('checked', false).checkboxradio('refresh');
	formElm.change(function () {
		ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][cbId] = this.checked;
		formElm.prop('checked', this.checked).checkboxradio('refresh');
		ev_env_enemigosBarcosCheckboxMax(n);
		ev_env_enemigosBarcosCheckboxResult();
	});
}
function ev_env_enemigosBarcosCheckboxReset () {
	var disable = false;
	if (ev_envenenado_app.vars.enemigos.barcos.max1 == 0) disable = true;
	for (var i in ev_envenenado_app.vars.enemigos.barcos.cbGrupo1) {
		ev_envenenado_app.vars.enemigos.barcos.cbGrupo1[i] = false;
		var cb = $('#ev-enemigos-barcos-form-' + i);
		cb.prop('checked', false).checkboxradio('refresh');
		cb.prop('disabled', disable);
		cb.checkboxradio('refresh');
	}
	if (ev_envenenado_app.vars.enemigos.barcos.max2 == 0) disable = true;
	for (var i in ev_envenenado_app.vars.enemigos.barcos.cbGrupo2) {
		ev_envenenado_app.vars.enemigos.barcos.cbGrupo2[i] = false;
		var cb = $('#ev-enemigos-barcos-form-' + i);
		cb.prop('checked', false).checkboxradio('refresh');
		cb.prop('disabled', disable);
		cb.checkboxradio('refresh');
	}
}
function ev_env_enemigosBarcosCheckboxMax (n) {
	var max = ev_envenenado_app.vars.enemigos.barcos['max'+n];
	var count = 0;
	for (var i in ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n]) if (ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][i]) count++;
	var disable = (count > (max -1));
	for (var i in ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n])
		if (!ev_envenenado_app.vars.enemigos.barcos['cbGrupo'+n][i])
			$('#ev-enemigos-barcos-form-' + i).prop('disabled', disable).checkboxradio('refresh');
}
function ev_env_enemigosBarcosCheckboxResult () {
	var resArray = [];
	var perfil = ev_envenenado_app.vars.enemigos.barcos.defPerfil;
	var obj = ev_envenenado_app.vars.enemigos.barcos;
	for (var i in obj.cbGrupo1) {
		if (resArray.length < obj.max1 && obj.cbGrupo1[i]) {
			resArray.push($('#ev-enemigos-barcos-form-'+i)[0].value);
			perfil++;
		}
	}
	var arrayMax = resArray.length + obj.max2;
	for (var i in obj.cbGrupo2) {
		if (resArray.length < arrayMax && obj.cbGrupo2[i]) {
			resArray.push($('#ev-enemigos-barcos-form-'+i)[0].value);
			perfil--;
		}
	}
	ev_envenenado_app.vars.enemigos.barcos.perfil = perfil;
	var elmResPerfil = document.getElementById('ev-enemigos-barcos-resultado-perfil');
	elmResPerfil.innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-barcos-resultado-2'));
}


function ev_env_fortalezasCheckboxList (list, n, max) {
	for (var i = 0; i < list.length; i++) ev_env_fortalezasCheckbox(list[i], n, max);
	//check max
	ev_env_fortalezasCheckboxMax(n, max);
}
function ev_env_fortalezasCheckbox (cbId, n, max) {
	var formElm = $('#ev-enemigos-fortalezas-form-' + cbId);
	formElm.checkboxradio();
	if (ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][cbId])
		formElm.prop('checked', true).checkboxradio('refresh');
	else formElm.prop('checked', false).checkboxradio('refresh');
	formElm.change(function () {
		if (this.checked) ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][cbId] = true;
		else ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][cbId] = false;
		formElm.prop('checked', this.checked).checkboxradio('refresh');
		ev_env_fortalezasCheckboxResult();
		ev_env_fortalezasCheckboxMax(n, max);
	});
}
function ev_env_fortalezasCheckboxMax (n, max) {
	var count = 0;
	for (var i in ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n]) if (ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][i]) count++;
	for (var i in ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n])
		if (!ev_envenenado_app.vars.enemigos.fortalezas['cbGrupo'+n][i]) {
			var dis = (count >= max)
			var cb = document.getElementById('ev-enemigos-fortalezas-form-'+i);
			cb.disabled = dis;
			if (dis) cb.previousSibling.style.opacity = '0.4';
			else cb.previousSibling.style.opacity = '1.0';
		}
}
function ev_env_fortalezasCheckboxResult () {
	var resArray = [];
	var perfil = 12;
	var obj = ev_envenenado_app.vars.enemigos.fortalezas;
	for (var i in obj.cbGrupo1) {
		if (obj.cbGrupo1[i]) {
			resArray.push($('#ev-enemigos-fortalezas-form-'+i)[0].value);
			perfil++;
		}
	}
	for (var i in obj.cbGrupo2) {
		if (obj.cbGrupo2[i]) {
			resArray.push($('#ev-enemigos-fortalezas-form-'+i)[0].value);
			perfil--;
		}
	}
	ev_envenenado_app.vars.enemigos.fortalezas.perfil = perfil;
	var elmResPerfil = document.getElementById('ev-enemigos-fortalezas-resultado-perfil');
	elmResPerfil.innerHTML = perfil;
	if (resArray.length) ev_env_showArray(resArray, document.getElementById('ev-enemigos-fortalezas-resultado-str'));
}


function ev_env_showArray (array, elm) {
	var str = '<ul>';
	for (var i = 0; i < array.length; i++) str += '<li>' + ev_env_capitalizeFirstLetter(array[i]) + '.</li>';
	str += '</ul>';
	elm.innerHTML = str;
}








//	--------------------------------

function ev_env_capitalizeFirstLetter (str) {
	return (str.charAt(0).toUpperCase() + str.substring(1))
}

function ev_env_shuffle_array (array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
