export interface Settings {
    Host?: {
    /**
         * [主机名] 重定向 OverseaVideo CDN (港澳台)
         *
         * 请选择 OverseaVideo 要重定向的主机名。
         *
         * @remarks
         *
         * Possible values:
         * - `'upos-sz-mirrorali.bilivideo.com'` - 阿里云 CDN
         * - `'upos-sz-mirrorcos.bilivideo.com'` - 腾讯云 CDN
         * - `'upos-sz-mirrorhw.bilivideo.com'` - 华为云 CDN，融合 CDN
         * - `'upos-sz-mirroraliov.bilivideo.com'` - 阿里云 CDN，海外
         * - `'upos-sz-mirrorcosov.bilivideo.com'` - 腾讯云 CDN，海外
         * - `'upos-sz-mirrorhwov.bilivideo.com'` - 华为云 CDN，海外
         * - `'cn-hk-eq-01-01.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-03.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-09.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-10.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-12.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-13.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-14.bilivideo.com'` - Equinix IX CDN，香港
         *
         * @defaultValue "upos-sz-mirrorali.bilivideo.com"
         */
        OverseaVideo?: 'upos-sz-mirrorali.bilivideo.com' | 'upos-sz-mirrorcos.bilivideo.com' | 'upos-sz-mirrorhw.bilivideo.com' | 'upos-sz-mirroraliov.bilivideo.com' | 'upos-sz-mirrorcosov.bilivideo.com' | 'upos-sz-mirrorhwov.bilivideo.com' | 'cn-hk-eq-01-01.bilivideo.com' | 'cn-hk-eq-01-03.bilivideo.com' | 'cn-hk-eq-01-09.bilivideo.com' | 'cn-hk-eq-01-10.bilivideo.com' | 'cn-hk-eq-01-12.bilivideo.com' | 'cn-hk-eq-01-13.bilivideo.com' | 'cn-hk-eq-01-14.bilivideo.com';
    /**
         * [主机名] 重定向 BStar CDN (国际版)
         *
         * 请选择 BStar 要重定向的主机名。
         *
         * @remarks
         *
         * Possible values:
         * - `'upos-sz-mirrorali.bilivideo.com'` - 阿里云 CDN
         * - `'upos-sz-mirrorcos.bilivideo.com'` - 腾讯云 CDN
         * - `'upos-sz-mirrorhw.bilivideo.com'` - 华为云 CDN，融合 CDN
         * - `'upos-sz-mirroraliov.bilivideo.com'` - 阿里云 CDN，海外
         * - `'upos-sz-mirrorcosov.bilivideo.com'` - 腾讯云 CDN，海外
         * - `'upos-sz-mirrorhwov.bilivideo.com'` - 华为云 CDN，海外
         * - `'cn-hk-eq-01-01.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-03.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-09.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-10.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-12.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-13.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-14.bilivideo.com'` - Equinix IX CDN，香港
         *
         * @defaultValue "upos-sz-mirrorali.bilivideo.com"
         */
        BStar?: 'upos-sz-mirrorali.bilivideo.com' | 'upos-sz-mirrorcos.bilivideo.com' | 'upos-sz-mirrorhw.bilivideo.com' | 'upos-sz-mirroraliov.bilivideo.com' | 'upos-sz-mirrorcosov.bilivideo.com' | 'upos-sz-mirrorhwov.bilivideo.com' | 'cn-hk-eq-01-01.bilivideo.com' | 'cn-hk-eq-01-03.bilivideo.com' | 'cn-hk-eq-01-09.bilivideo.com' | 'cn-hk-eq-01-10.bilivideo.com' | 'cn-hk-eq-01-12.bilivideo.com' | 'cn-hk-eq-01-13.bilivideo.com' | 'cn-hk-eq-01-14.bilivideo.com';
    /**
         * [主机名] 重定向 PCDN 主机名 (中国大陆)
         *
         * 请选择 PCDN 要重定向的主机名。
         *
         * @remarks
         *
         * Possible values:
         * - `'upos-sz-mirrorali.bilivideo.com'` - 阿里云 CDN
         * - `'upos-sz-mirrorcos.bilivideo.com'` - 腾讯云 CDN
         * - `'upos-sz-mirrorhw.bilivideo.com'` - 华为云 CDN，融合 CDN
         * - `'upos-sz-mirroraliov.bilivideo.com'` - 阿里云 CDN，海外
         * - `'upos-sz-mirrorcosov.bilivideo.com'` - 腾讯云 CDN，海外
         * - `'upos-sz-mirrorhwov.bilivideo.com'` - 华为云 CDN，海外
         * - `'cn-hk-eq-01-01.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-03.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-09.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-10.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-12.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-13.bilivideo.com'` - Equinix IX CDN，香港
         * - `'cn-hk-eq-01-14.bilivideo.com'` - Equinix IX CDN，香港
         *
         * @defaultValue "upos-sz-mirrorali.bilivideo.com"
         */
        PCDN?: 'upos-sz-mirrorali.bilivideo.com' | 'upos-sz-mirrorcos.bilivideo.com' | 'upos-sz-mirrorhw.bilivideo.com' | 'upos-sz-mirroraliov.bilivideo.com' | 'upos-sz-mirrorcosov.bilivideo.com' | 'upos-sz-mirrorhwov.bilivideo.com' | 'cn-hk-eq-01-01.bilivideo.com' | 'cn-hk-eq-01-03.bilivideo.com' | 'cn-hk-eq-01-09.bilivideo.com' | 'cn-hk-eq-01-10.bilivideo.com' | 'cn-hk-eq-01-12.bilivideo.com' | 'cn-hk-eq-01-13.bilivideo.com' | 'cn-hk-eq-01-14.bilivideo.com';
    /**
         * [主机名] 重定向 MCDN 主机名 (中国大陆)
         *
         * 请选择 MCDN 要重定向的主机名。
         *
         * @remarks
         *
         * Possible values:
         * - `'proxy-tf-all-ws.bilivideo.com'` - proxy-tf-all-ws.bilivideo.com
         *
         * @defaultValue "proxy-tf-all-ws.bilivideo.com"
         */
        MCDN?: 'proxy-tf-all-ws.bilivideo.com';
};
    /**
     * [储存] 配置类型
     *
     * 选择要使用的配置类型。未设置此选项或不通过此选项的旧版本的配置顺序依旧是 PersistentStore (BoxJs) > $argument > database.
     *
     * @remarks
     *
     * Possible values:
     * - `'Argument'` - 优先使用来自 $argument 的配置，$argument 不包含的设置项由 PersistentStore (BoxJs) 提供
     * - `'PersistentStore'` - 只使用 PersistentStore (BoxJs) 提供的配置
     * - `'database'` - 只使用由作者的 database.mjs 文件提供的默认配置，其他任何自定义配置不再起作用
     *
     * @defaultValue "Argument"
     */
    Storage?: 'Argument' | 'PersistentStore' | 'database';
    /**
     * [调试] 日志等级
     *
     * 选择脚本日志的输出等级，低于所选等级的日志将全部输出。
     *
     * @remarks
     *
     * Possible values:
     * - `'OFF'` - 关闭
     * - `'ERROR'` - ❌ 错误
     * - `'WARN'` - ⚠️ 警告
     * - `'INFO'` - ℹ️ 信息
     * - `'DEBUG'` - 🅱️ 调试
     * - `'ALL'` - 全部
     *
     * @defaultValue "WARN"
     */
    LogLevel?: 'OFF' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'ALL';
}
