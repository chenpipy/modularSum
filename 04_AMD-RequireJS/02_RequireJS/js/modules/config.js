define(function () {
    // http://localhost:63342/modularSum/04_AMD-RequireJS/02_RequireJS/
    return {
        //基本路径
        baseUrl: 'js/',
        //映射: 模块标识名: 路径
        paths: {
            //自定义模块
            '@template':'template/',
            'alerter': 'modules/alerter',
            'dataService': 'modules/dataService',

            //库模块
            'jquery': 'libs/jquery-1.10.1',
            'angular': 'libs/angular',
            'index':'noAMDlibs/index',
            'item':'noAMDlibs/item',
            'text':'modules/text',
        },

        //配置不兼容AMD的模块
        shim: {
            angular: {
                exports: 'angular'
            },
            index:{
                deps: ['item']
            }
        }
    }
})