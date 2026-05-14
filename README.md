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
  statichome.conf
```

## Nginx

根目录的 `statichome.conf` 是一个可以被主 Nginx 配置 `include` 的站点配置片段。

示例：

```nginx
include /var/www/staticHome/statichome.conf;
```

当前配置监听 `80` 端口，并将静态文件根目录设置为：

```nginx
root /var/www/staticHome;
```

示例访问地址：

```text
http://your-domain.com/gift-box/
http://your-domain.com/company-a/
http://your-domain.com/company-b/
```

新增公司页面时：

1. 在仓库根目录创建一个文件夹，例如 `company-c/`。
2. 把该公司的静态页面文件放进这个文件夹。
3. 将仓库内容部署到 `/var/www/staticHome`。
4. 访问 `http://your-domain.com/company-c/`。

如果服务器上的部署目录不是 `/var/www/staticHome`，需要同步修改 `statichome.conf` 里的 `root`。


## 新建连接配置
sudo ln -s /var/www/staticHome/statichome.conf /etc/nginx/sites-enabled/statichome.conf
systemctl reload nginx