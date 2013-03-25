/*
	@param	object	: Google Maps Object
*/
var project = function ( gmap_ ) {
	//引数の読み込み
	var gmap = gmap_;
	
	//設定・定義類
	//使用するレイヤー番号（一定）
	var LAYER_NUMBER = 0;
	//デフォルトの不透明度
	var opacity = 1;
	//タイルの定義
	var tiles = {
				"basic" : {
								"opacity" : 1,
								"isPng" : true,
								"minZoom" : 5,
								"maxZoom" : 13,
								"name" : 'basic',
								"alt" : '',
								"tileSize" : new google.maps.Size ( 256, 256 ),
								"getTileUrl" : function ( coord_, zoom_ ) {
													var url = 'http://riodb02.ibase.aist.go.jp'
															+ '/'
															+ 'db084/'
															+ 'basic/'
															+ 'glfn/'
															+ String ( zoom_ ) + '/'
															+ String ( coord_.y ) + '/'
															+ String ( coord_.x ) + '.png';
													return url;
												}
							},
				"detailed" : {
								"opacity" : 1,
								"isPng" : true,
								"minZoom" : 5,
								"maxZoom" : 13,
								"name" : 'detailed',
								"alt" : '',
								"tileSize" : new google.maps.Size ( 256, 256 ),
								"getTileUrl" : function ( coord_, zoom_ ) {
													var url = 'http://riodb02.ibase.aist.go.jp'
															+ '/'
															+ 'db084/'
															+ 'detailed/'
															+ 'glfn/'
															+ String ( zoom_ ) + '/'
															+ String ( coord_.y ) + '/'
															+ String ( coord_.x ) + '.png';
													return url;
												}
							}
		};
	
	return {
			/*
				@param	string	: Tile name
				@param	float	: Tile opacity
			*/
			'switchTile' : function ( name_, opacity_ ) {
									//イメージマップタイプの引数を決定する
									var mapOption = tiles[name_];
									//不透明度を、与えられた引数で上書きする
									mapOption.opacity = opacity_;
	
									var layer = gmap.overlayMapTypes.getAt( LAYER_NUMBER );
									if ( typeof layer === 'undefined' ) {
										//タイルオーバーレイが定義されていない場合
										gmap.overlayMapTypes.insertAt( LAYER_NUMBER, new google.maps.ImageMapType(mapOption) );
									} else {
										//タイルオーバーレイが定義されている場合
										//タイルオーバーレイの名前と透明度で分岐処理
										if ( layer.name === name_ && layer.opacity === opacity_ ) {
											//タイルオーバーレイは定義されているが、名前も不透明度も変更がない場合
											//何もしない
										} else {
											//タイルオーバーレイが定義され、名前もしくは不透明度のいずれかが変更されている場合
											//与えられた名前のタイルオーバーレイで差し替える
											gmap.overlayMapTypes.removeAt( LAYER_NUMBER );
											gmap.overlayMapTypes.insertAt( LAYER_NUMBER, new google.maps.ImageMapType(mapOption) );
										}
									}
							}
		};
};







