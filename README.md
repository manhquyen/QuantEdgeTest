# QuantEdgeTest
Quant Edge Test

Thực hiện project trong vòng 15 ngày

Giai đoạn 1 : (4 ngày) 
- Xây dựng project
- Thiết kế giao diện sử dụng thư viện  https://material-ui.com
- Thử nghiệm với dữ liệu tĩnh 

Giai đoạn 2: ( 5 ngày)
- Viết chức năng tạo dữ liệu dưới backend Nodejs
- Viết API cung cấp dữ liệu cho frontend
- Sử dụng postman kiểm thử API

Giai đoạn 3: (6 ngày )
- Thực hiện cập nhập dữ liệu lên frontend
- Thực hiện các chức năng được yêu cầu bao gồm : Tính toán thay đổi và thay đổi màu sắc,sắp xếp và hiển thị tại 2 page Top Gainer ,Top Loser 

Tham khảo 
# create-react-app React Project with Node Express Backend

> Example on using create-react-app with a Node Express Backend

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```

## How this works

The key to use an Express backend with a project created with `create-react-app` is on using a **proxy**. We have a _proxy_ entry in `client/package.json`

```
"proxy": "http://localhost:5000/"
```

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:5000**

## Tutorial

Visit my [blog post](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0) entry for a detailed step-by-step guide.

[Deployed app](https://cra-express.herokuapp.com/)

## Giving Back

If you would like to support my work and the time I put in making tutorials, you can click the image below to get me a coffee. I would really appreciate it (but is not required).

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/esausilva)

-Esau
