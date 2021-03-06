import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import SubLayout from '@/layout/SubLayout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */


export const constantRoutes = [{
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'Home',
            component: () =>
                import ('@/views/home/index'),
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '/nomenu',
        component: Layout,
        hidden: true
    },
    { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = [{
        path: '/roleManagement',
        component: Layout,
        redirect: '/roleManagement/table',
        name: 'Role',
        meta: { title: '????????????', icon: 'tree', keepAlive: true },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/common/roleManagement'),
                meta: { title: '????????????', icon: 'tree', keepAlive: true, breadcrumb: false, }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/common/roleManagement/addorEdit'),
                meta: { title: '????????????', icon: 'tree' },
                hidden: true
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/common/roleManagement/addorEdit'),
                meta: { title: '????????????', icon: 'tree' },
                hidden: true
            },
            {
                path: 'access',
                name: 'Access',
                component: () =>
                    import ('@/views/common/roleManagement/accessConfiguration'),
                meta: { title: '????????????', icon: 'tree' },
                hidden: true
            }
        ]
    },
    {
        path: '/userManagement',
        component: Layout,
        redirect: '/userManagement/table',
        name: 'Role',
        meta: { title: '????????????', icon: 'tree' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/common/userManagement'),
                meta: { title: '????????????', icon: 'tree', breadcrumb: false }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/common/userManagement/addorEdit'),
                meta: { title: '????????????', icon: 'tree' },
                hidden: true
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/common/userManagement/addorEdit'),
                meta: { title: '????????????', icon: 'tree' },
                hidden: true
            },
            {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('@/views/common/userManagement/detail'),
                meta: { title: '????????????', icon: 'tree' },
                hidden: true
            }
        ]
    },
    {
        path: '/resourceManagement',
        component: Layout,
        redirect: '/resourceManagement/table',
        name: 'ResourceManage',
        meta: { title: '????????????', icon: 'tree' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/operation/resourceManagement'),
                meta: { title: '????????????', icon: 'tree', breadcrumb: false }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/operation/resourceManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/operation/resourceManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('@/views/operation/resourceManagement/detail'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            }
        ]
    },
    {
        path: '/tenementManagement',
        component: Layout,
        redirect: '/tenementManagement/table',
        name: 'ResourceManage',
        meta: { title: '????????????', icon: 'tree' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/tenement/tenementManagement'),
                meta: { title: '????????????', icon: 'tree', breadcrumb: false }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/tenement/tenementManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/tenement/tenementManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('@/views/tenement/tenementManagement/detail'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'product',
                name: 'product',
                component: SubLayout,
                redirect: '/tenementManagement/product/table',
                meta: { title: '????????????', icon: 'tree' },
                hidden: true,
                children: [{
                        path: 'table',
                        component: () =>
                            import ('@/views/tenement/tenementManagement/productConfiguration'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree', breadcrumb: false }
                    },
                    {
                        path: 'add',
                        name: 'Add',
                        component: () =>
                            import ('@/views/tenement/tenementManagement/productConfiguration/addOrEdit'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree' }
                    },
                    {
                        path: 'edit',
                        name: 'Edit',
                        component: () =>
                            import ('@/views/tenement/tenementManagement/productConfiguration/addOrEdit'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree' }
                    },
                    {
                        path: 'detail',
                        name: 'Detail',
                        component: () =>
                            import ('@/views/tenement/tenementManagement/productConfiguration/detail'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree' }
                    }
                ]
            }
        ]
    },
    {
        path: '/productManagement',
        component: Layout,
        redirect: '/productManagement/table',
        name: 'ProductManagement',
        meta: { title: '????????????', icon: 'tree' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/common/productManagement'),
                meta: { title: '????????????', icon: 'tree', breadcrumb: false }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/common/productManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/common/productManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'update',
                name: 'Update',
                component: () =>
                    import ('@/views/common/productManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('@/views/common/productManagement/detail'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'access',
                name: 'access',
                component: () =>
                    import ('@/views/common/productManagement/accessConfiguration'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            }
        ]
    },
    {
        path: '/organizationManagement',
        component: Layout,
        redirect: '/organizationManagement/table',
        name: 'ProductManagement',
        meta: { title: '????????????', icon: 'tree' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/organization/organizationManagement'),
                meta: { title: '????????????', icon: 'tree', breadcrumb: false }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/organization/organizationManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/organization/organizationManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'update',
                name: 'Update',
                component: () =>
                    import ('@/views/organization/organizationManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('@/views/organization/organizationManagement/detail'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'product',
                name: 'product',
                component: SubLayout,
                redirect: '/organizationManagement/product/table',
                meta: { title: '????????????', icon: 'tree' },
                hidden: true,
                children: [{
                        path: 'table',
                        component: () =>
                            import ('@/views/organization/organizationManagement/productConfiguration'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree', breadcrumb: false }
                    },
                    {
                        path: 'add',
                        name: 'Add',
                        component: () =>
                            import ('@/views/organization/organizationManagement/productConfiguration/addOrEdit'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree' }
                    },
                    {
                        path: 'edit',
                        name: 'Edit',
                        component: () =>
                            import ('@/views/organization/organizationManagement/productConfiguration/addOrEdit'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree' }
                    },
                    {
                        path: 'detail',
                        name: 'Detail',
                        component: () =>
                            import ('@/views/organization/organizationManagement/productConfiguration/detail'),
                        hidden: true,
                        meta: { title: '????????????', icon: 'tree' }
                    }
                ]
            }
        ]
    },
    {
        path: '/personalManagement',
        component: Layout,
        redirect: '/personalManagement/table',
        name: 'personalManagement',
        meta: { title: '????????????', icon: 'tree' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/organization/personalManagement'),
                meta: { title: '????????????', icon: 'tree', keepAlive: true, breadcrumb: false, }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/organization/personalManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/organization/personalManagement/addOrEdit'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            },
            {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('@/views/organization/personalManagement/detail'),
                hidden: true,
                meta: { title: '????????????', icon: 'tree' }
            }
        ]
    },
    {
        path: '/opractionLog',
        component: Layout,
        redirect: '/opractionLog/table',
        name: 'opractionLog',
        meta: { title: '????????????', icon: 'el-icon-s-help' },
        children: [{
            path: 'table',
            name: 'Table',
            component: () =>
                import ('@/views/common/opractionLog'),
            meta: {
                title: '????????????',
                icon: 'tree',
                breadcrumb: false
            }
        }]
    },
    {
        path: '/loginLog',
        component: Layout,
        redirect: '/loginLog/table',
        name: 'loginLog',
        meta: { title: '????????????', icon: 'el-icon-s-help' },
        children: [{
            path: 'table',
            name: 'Table',
            component: () =>
                import ('@/views/common/loginLog'),
            meta: {
                title: '????????????',
                icon: 'tree',
                breadcrumb: false
            }
        }]
    },
    {
        path: '/recycleBin',
        component: Layout,
        redirect: '/recycleBin/table',
        name: 'recycleBin',
        meta: { title: '?????????', icon: 'el-icon-s-help' },
        children: [{
            path: 'table',
            name: 'Table',
            component: () =>
                import ('@/views/common/recycleBin'),
            meta: {
                title: '?????????',
                icon: 'tree',
                breadcrumb: false
            }
        }]
    },
    {
        path: '/personalInfo',
        component: Layout,
        redirect: '/personalInfo/table',
        name: 'personalInfo',
        meta: { title: '????????????', icon: 'el-icon-s-help' },
        children: [{
            path: 'table',
            name: 'Table',
            component: () =>
                import ('@/views/common/userInfo'),
            meta: {
                title: '????????????',
                icon: 'tree',
                breadcrumb: false
            }
        }, ]
    },
    {
        path: '/parameter',
        component: Layout,
        redirect: '/parameter/table',
        name: 'parameter',
        meta: { title: '????????????', icon: 'el-icon-s-help' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/common/parameter'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    breadcrumb: false
                }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/common/parameter/addOrEdit'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            },
            {
                path: 'edit',
                name: 'Edit',
                component: () =>
                    import ('@/views/common/parameter/addOrEdit'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            },
            {
                path: 'detail',
                name: 'Detail',
                component: () =>
                    import ('@/views/common/parameter/detail'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            },
        ]
    },
    {
        path: '/messageCentre',
        component: Layout,
        redirect: '/messageCentre/table',
        name: 'messageCentre',
        meta: { title: '????????????', icon: 'el-icon-s-help' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/common/messageCentre'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    breadcrumb: false
                }
            },
            {
                path: 'detail',
                name: 'detail',
                component: () =>
                    import ('@/views/common/messageCentre/components/detail.vue'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            }
        ]
    },
    {
        path: '/myProduce',
        component: Layout,
        redirect: '/myProduce/table',
        name: 'myProduce',
        meta: {
            title: '????????????',
            icon: 'el-icon-s-help',
            breadcrumb: true
        },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/common/myProduct'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    breadcrumb: false
                }
            },
            {
                path: 'detail',
                name: 'myProduceDetail',
                component: () =>
                    import ('@/views/common/myProduct/components/detail.vue'),
                meta: {
                    title: '??????????????????',
                    icon: 'tree'
                }
            },
            {
                path: 'setting',
                name: 'myProduceSetting',
                component: () =>
                    import ('@/views/common/myProduct/components/setting.vue'),
                meta: {
                    title: '???????????????',
                    icon: 'tree'
                }
            }
        ]
    },
    {
        path: '/organization',
        name: 'organization',
        redirect: '/organization/table',
        component: Layout,
        meta: { title: '????????????', icon: 'tree', keepAlive: true },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/organization/postManagement'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    keepAlive: true,
                    breadcrumb: false,
                }
            },
            {
                path: 'addPost',
                name: 'addPost',
                component: () =>
                    import ('@/views/organization/postManagement/addPost'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    //   keepAlive: true
                }
            },
            {
                path: 'editPost',
                name: 'editPost',
                component: () =>
                    import ('@/views/organization/postManagement/addPost'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    //   keepAlive: true
                }
            },
            {
                path: 'postDetail',
                name: 'postDetail',
                component: () =>
                    import ('@/views/organization/postManagement/components/postDetail.vue'),
                meta: {
                    title: '??????????????????',
                    icon: 'tree',
                    source: 'post'
                },
                children: [{
                    path: 'userDetail',
                    name: 'userDetail',
                    component: () =>
                        import ('@/views/organization/components/personDetail.vue'),
                    meta: {
                        title: '??????????????????',
                        icon: 'tree',
                    }
                }]
            }
        ]
    },
    {
        path: '/departmentManagement',
        name: 'departmentManagement',
        redirect: '/departmentManagement/table',
        component: Layout,
        meta: { title: '????????????', icon: 'tree' },
        children: [{
                path: 'table',
                component: () =>
                    import ('@/views/organization/departmentManagement'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    breadcrumb: false
                }
            },
            {
                path: 'detail',
                component: () =>
                    import ('@/views/organization/departmentManagement/detail'),
                meta: {
                    title: '??????????????????',
                    icon: 'tree'
                },
                children: [{
                    path: 'userDetail',
                    name: 'userDetail',
                    component: () =>
                        import ('@/views/organization/components/personDetail.vue'),
                    meta: {
                        title: '??????????????????',
                        icon: 'tree'
                    }
                }]
            },
            {
                path: 'addDepartment',
                component: () =>
                    import ('@/views/organization/departmentManagement/addDepartment'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            },
            {
                path: 'editDepartment',
                component: () =>
                    import ('@/views/organization/departmentManagement/addDepartment'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            },
        ]
    },
    {
        path: '/dataDictionary',
        name: 'dataDictionary',
        redirect: '/dataDictionary/table',
        component: Layout,
        meta: {
            title: '????????????',
            icon: 'tree',
        },
        children: [{
                path: 'table',
                component: () =>
                    import ('@/views/dataDictionary'),
                meta: {
                    title: '????????????',
                    icon: 'tree',
                    breadcrumb: false,
                }
            },
            {
                path: 'add',
                component: () =>
                    import ('@/views/dataDictionary/components/add'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            },
            {
                path: 'edit',
                component: () =>
                    import ('@/views/dataDictionary/components/add'),
                meta: {
                    title: '????????????',
                    icon: 'tree'
                }
            },
            {
                path: 'detail',
                component: () =>
                    import ('@/views/dataDictionary/components/detail'),
                meta: {
                    title: '??????????????????',
                    icon: 'tree'
                }
            },
        ]
    },
    {
        path: '/innerMessage',
        name: 'innerMessage',
        redirect: '/innerMessage/table',
        component: Layout,
        meta: {
            title: '?????????',
        },
        children: [{
                path: 'table',
                component: () =>
                    import ('@/views/common/innerMessage'),
                meta: {
                    title: '?????????',
                    breadcrumb: false,

                }
            },
            {
                path: 'add',
                component: () =>
                    import ('@/views/common/innerMessage/AddEdit'),
                meta: {
                    title: '???????????????',
                }
            },
            {
                path: 'edit',
                component: () =>
                    import ('@/views/common/innerMessage/AddEdit'),
                meta: {
                    title: '???????????????',
                }
            },
            {
                path: 'reply',
                component: () =>
                    import ('@/views/common/innerMessage/Reply'),
                meta: {
                    title: '???????????????',
                }
            },
            {
                path: 'detail',
                component: () =>
                    import ('@/views/common/innerMessage/Detail'),
                meta: {
                    title: '???????????????',
                }
            },
        ]
    },
    {
        path: '/templateManagement',
        name: 'templateManagement',
        redirect: '/templateManagement/table',
        component: Layout,
        meta: {
            title: '????????????',
        },
        children: [{
                path: 'table',
                component: () =>
                    import ('@/views/common/templateManagement'),
                meta: {
                    title: '????????????',
                    breadcrumb: false,
                }
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('@/views/common/templateManagement/addEdit'),
                meta: {
                    title: '????????????',
                }
            },
            {
                path: 'edit',
                name: 'Adit',
                component: () =>
                    import ('@/views/common/templateManagement/addEdit'),
                meta: {
                    title: '????????????',
                }
            },
            {
                path: 'detail',
                component: () =>
                    import ('@/views/common/templateManagement/detail'),
                meta: {
                    title: '????????????',
                }
            },
        ]
    },
    {
        path: '/noticeManagement',
        name: 'noticeManagement',
        redirect: '/noticeManagement/table',
        component: Layout,
        meta: {
            title: '????????????',
        },
        children: [{
                path: 'table',
                component: () =>
                    import ('@/views/common/noticeManagement'),
                meta: {
                    title: '????????????',
                    breadcrumb: false
                }
            },
            {
                path: 'add',
                component: () =>
                    import ('@/views/common/noticeManagement/components/add'),
                meta: {
                    title: '????????????',
                }
            },
            {
                path: 'edit',
                component: () =>
                    import ('@/views/common/noticeManagement/components/add'),
                meta: {
                    title: '????????????',
                }
            },
            {
                path: 'detail',
                component: () =>
                    import ('@/views/common/noticeManagement/components/detail'),
                meta: {
                    title: '????????????',
                }
            },
        ]
    },
    {
        path: '/sendRecord',
        name: 'sendRecord',
        redirect: '/sendRecord/table',
        component: Layout,
        meta: {
            title: '????????????',
        },
        children: [{
                path: 'table',
                component: () =>
                    import ('@/views/common/sendRecord'),
                meta: {
                    title: '????????????',
                    breadcrumb: false
                }
            },
            {
                path: 'detail',
                component: () =>
                    import ('@/views/common/sendRecord/detail'),
                meta: {
                    title: '????????????',
                }
            },
        ]
    },
    {
        path: '/supportProSetting',
        name: 'supportProSetting',
        redirect: '/supportProSetting/table',
        component: Layout,
        meta: {
            title: '?????????????????????',
        },
        children: [{
            path: 'table',
            component: () =>
                import ('@/views/supportProSetting'),
            meta: {
                title: '???????????????',
                breadcrumb: false
            }
        }, ]
    },
    {
        path: '/onlineConfiguration',
        name: 'onlineConfiguration',
        redirect: '/onlineConfiguration/table',
        component: Layout,
        meta: {
            title: '?????????????????????',
        },
        children: [{
            path: '/onlineConfiguration/table',
            component: () =>
                import ('@/views/common/onlineConfiguration'),
            meta: {
                title: '?????????????????????',
            }
        }]
    },
    // {
    //   path: '/nomenu',
    //   name: 'nomenu',
    //   redirect: '/nomenu/table',
    //   component: Layout,
    //   children: [
    //     {
    //       path: '/nomenu/table',
    //       component: () => import('@/views/common/onlineConfiguration'),
    //       meta: {
    //         title: '?????????????????????',
    //       }
    //     }
    //   ]
    // },

]

const createRouter = () =>
    new Router({
        mode: 'hash',
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes.concat(asyncRoutes)
    })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router