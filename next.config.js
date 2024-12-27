// next.config.js
module.exports = {
  env: {
    PUBLIC_URL: "", // Đây là biến môi trường để truy cập vào URL công khai nếu cần thiết
  },
  webpack: (config) => {
    // Thêm cấu hình cho file-loader vào đây
    config.module.rules.push({
      test: /\.(pdf|jpg|jpeg|png|gif|svg|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static', // Thư mục đầu ra
            publicPath: '/_next/static', // Đường dẫn public
            name: '[name].[ext]',
          },
        },
      ],
    });

    // Thêm đoạn cấu hình resolve.alias
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };

    return config;
  },
};
