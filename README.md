---

# DALL-E Image Generator

DALL-E Image Generator is a website where you can unleash your creativity by creating and sharing AI-generated images using the powerful DALL-E model. This project is developed with the MERN stack and powered by OpenAI. To use the image generation features, you'll need to obtain an OpenAI API key.

Visit the site: [DALL-E Image Generator](https://dall-e-mk5l.onrender.com/)

## Features

- **Image Creation:** Generate unique AI-generated images using the cutting-edge DALL-E model.
  
- **Sharing Platform:** Share your created images with the community and explore images created by others.
  
- **User-Friendly Interface:** Enjoy a smooth and intuitive interface for a delightful user experience.

## Getting Started

Follow these steps to explore and use the DALL-E Image Generator:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database.
- OpenAI API key.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/DALL-E-Image-Generator.git
cd DALL-E-Image-Generator
```

2. Install dependencies:

```bash
cd client
npm install
cd ../server
npm install
```

3. Set up your MongoDB database:
   - Create a `.env` file in the `server` directory and add your MongoDB connection string:

     ```env
     MONGODB_URI=your-mongodb-uri
     ```

4. Set up your OpenAI API key:
   - Create a `.env` file in the `server` directory and add your OpenAI API key:

     ```env
     OPENAI_API_KEY=your-openai-api-key
     ```

5. Run the application:

```bash
cd ../client
npm start
```

Visit `http://localhost:3000` in your browser to start creating and sharing AI-generated images with DALL-E.

## Contributing

We welcome contributions! To contribute to the DALL-E Image Generator, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## Issue Tracking

If you encounter any issues or have suggestions, please open an issue. We appreciate your feedback!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy creating and sharing AI-generated images with DALL-E!

---
