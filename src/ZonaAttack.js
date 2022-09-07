class ZonaAttack{

	ZoneAttack = function(Xmodel,XHero,ZONA_ATTACK){
		if(Xmodel>XHero-ZONA_ATTACK&&Xmodel<XHero+ZONA_ATTACK){
			return true;
		}
		return false;
	};
}
export { ZonaAttack }