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
        depends: [ 'js-release', 'css', 'copy', 'useref' ]
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
        depends: ['clean'],
	src: [src + '/*.html', src + '/images/**' ],
	dest: dest,
	base: src
    },

    /**
     * CSS ビルド
     * @type {Object}
     */
    css: {
        depends: ['clean'],
        src: src + '/stylus/*.styl',
	dest: dest + '/css'
    },

    /**
     * JavaScript ビルド
     * ( js/js-release/watchify 共通 )
     * @type {Object}
     */
    js: {
        depends: ['clean'],
	target: {
            app: {
                src: src + '/js/app.js',
	        bundle: 'TodoAppBundle.js',
		transform: ['reactify']
	    },
            index: {
                src: src + '/js/index.js',
	        bundle: 'index.js',
		transform: []
	    },
	},
	dest: dest + '/js',
	browserify: {
            debug: true
	}
    },

    /**
     * リリース用HTMLリソース参照解決
     * @type {Object}
     */
    useref: {
        src: src + '/*.html',
	dest: dest
    },

    /**
     * ソース変更監視 ＆ 開発用ビルド
     * @type {Object}
     */
    watch: {
        depends: ['css', 'watchify'],
	css: {
            src: [ src + '/stylus/*.styl', '!' + src + '/css/*.css' ],
	    task: ['css']
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
