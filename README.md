# staticHome

这个仓库用于存放多个静态网页项目。每个公司或项目对应一个独立文件夹。

```text
staticHome/
  gift-box/
    index.html
    detail.html
    app.js
    styles.css
  company-a/
    index.html
    assets/
  company-b/
    index.html
    assets/
  static-sites.conf
```

## Nginx

根目录的 `static-sites.conf` 是一个可以被主 Nginx 配置 `include` 的站点配置片段。

示例：

```nginx
include /var/www/softbuild/static-sites.conf;
```

当前配置监听 `8001` 端口，并将静态文件根目录设置为：

```nginx
root /var/www/softbuild;
```

示例访问地址：

```text
http://your-domain.com:8001/gift-box/
http://your-domain.com:8001/company-a/
http://your-domain.com:8001/company-b/
```

新增公司页面时：

1. 在仓库根目录创建一个文件夹，例如 `company-c/`。
2. 把该公司的静态页面文件放进这个文件夹。
3. 将仓库内容部署到 `/var/www/softbuild`。
4. 访问 `http://your-domain.com:8001/company-c/`。

如果服务器上的部署目录不是 `/var/www/softbuild`，需要同步修改 `static-sites.conf` 里的 `root`。
