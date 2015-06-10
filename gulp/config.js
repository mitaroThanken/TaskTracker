/**
 * パス
 */
var src = './src'
var dest = './data'

/**
 * gulp タスクに対する設定
 * @type {Object}
 */
module.exports = {
    /**
     * デバッグビルド
     * @type {Object}
     */
    build: {
        depends: [ 'js', 'css', 'copy' ]
    },

    /**
     * リリースビルド
     * @type {Object}
     */
    release: {
        depends: [ 'js-release', 'combine' ]
    },

    /**
     * リリース用ディレクトリの削除
     * @type {Object}
     */
    clean: {
        dist: dest
    },

    /**
     * リソースのコピー
     * @type {Object}
     */
    copy: {
	src: [src + '/*.html', 
              src + '/images/**',
	      src + '/jquery/dist/jquery.min.*',
	      src + '/Honoka/dist/js/bootstrap.min.js',
	      src + '/Honoka/dist/css/bootstrap.css',
	      src + '/Honoka/dist/fonts/*'],
	dest: dest,
	base: src
    },

    /**
     * CSS ビルド
     * @type {Object}
     */
    css: {
        src: {
	    styl: src + '/stylus/*.styl',
	    css: src + '/css/*.css'
	},
	dest: dest + '/css'
    },

    /**
     * JavaScript ビルド
     * ( js/js-release/watchify 共通 )
     * @type {Object}
     */
    js: {
	target: {
            app: {
                src: src + '/js/app.js',
	        bundle: 'AppBundle.js',
		browserify: {
		    bundleExternal: true,
		    debug: true
		},
		transform: ['reactify']
	    },
            index: {
                src: src + '/js/index.js',
	        bundle: 'index.js',
		browserify: {
                    bundleExternal: false,
		    debug: true
		},
		transform: []
	    },
            login: {
                src: src + '/js/login.js',
	        bundle: 'login.js',
		browserify: {
                    bundleExternal: false,
		    debug: true
		},
		transform: []
	    }
	},
	dest: dest + '/js'
    },

    /**
     * リリース用HTMLリソース参照解決
     * @type {Object}
     */
    useref: {
	depends: ['css', 'copy'],
        src: dest + '/*.html',
	dest: dest
    },

    /**
     * リリース用不要リソース削除
     * @type {Object}
     */
    combine: {
        depends: ['useref'],
	css: [dest + '/css/*.css', '!' + dest + '/css/combined.css']
    },

    /**
     * ソース変更監視 ＆ 開発用ビルド
     * @type {Object}
     */
    watch: {
        depends: ['build', 'watchify'],
	css: {
            src: [ src + '/stylus/*.styl', src + '/css/*.css' ],
	    task: ['css']
	}
    },

    /**
     * live 用スクリプトインジェクション
     * @type {Object}
     */
    inject: {
        depends: ['build'],
        target: 'data/App.html',
	source: ['data/js/AppBundle.js'],
	sourceOption: {read: false},
	injectOption: {relative: true},
	dest: 'data'
    },

    /**
     * React+Flux ライブリロード
     * @type {Object}
     */
    live: {
        depends: ['watch','inject'],
	src: 'data',
	options: {
            livereload: true,
	    directoryListing: false,
	    fallback: 'App.html',
	    port: 10800,
	    open: true
	}
    },

    /**
     * 既定タスク
     * @type {Object}
     */
    default: {
        depends: ['watch']
    }
};
