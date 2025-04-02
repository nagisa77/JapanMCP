# 京都旅行行程应用

这是一个精美的京都旅行行程展示页面，结合了Google Maps API来显示旅行路线和地点信息。

## 功能特点

- 详细展示2025年4月3日～4月7日京都旅行行程
- 使用Google Maps API显示每日行程路线和景点位置
- 响应式设计，适配不同设备屏幕
- 交互式景点列表，点击可在地图上查看具体位置
- 美观的时间线显示行程安排

## 如何使用

1. 克隆或下载此仓库到本地
2. 在`index.html`中找到以下代码行：
   ```html
   <script async src="https://maps.googleapis.com/maps/api/js?key=REPLACE_WITH_YOUR_API_KEY&libraries=places&callback=initMaps"></script>
   ```
3. 将`REPLACE_WITH_YOUR_API_KEY`替换为您的Google Maps API密钥
   - 如果您没有API密钥，可以在[Google Cloud Console](https://console.cloud.google.com/)中创建
   - 需要启用Maps JavaScript API和Places API服务
4. 用浏览器打开`index.html`文件即可查看行程

## 自定义行程

如需自定义行程，可编辑以下内容：

- `index.html`中的行程信息文本
- JavaScript代码中的地图坐标和路线信息
- CSS样式中的颜色方案和布局设置

## 技术栈

- HTML5
- CSS3（自定义变量，弹性布局，响应式设计）
- JavaScript（原生）
- Google Maps JavaScript API
- Google Places API

## 注意事项

- 使用此应用需要联网，以加载Google Maps API
- 为获得完整功能体验，请确保使用最新版本的现代浏览器
- 如在本地查看，部分浏览器可能会因安全策略限制地图功能，建议使用简单的本地服务器运行

## 旅行小贴士

- 行程中标注了关键时间点和交通方式
- 每日行程页面包含当天所有景点信息
- 点击景点列表项可在地图上查看具体位置和路线
- 第6日（4月6日）有分队行动，可根据喜好选择不同路线

希望这个应用能帮助您更好地规划和享受京都之旅！ 