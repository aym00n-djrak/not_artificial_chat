# not_artificial_chat Application

This is a simple chat application built with React and TypeScript.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/aym00n-djrak/not_artificial_chat.git
    cd not_artificial_chat
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Environment Variables

1. Create a `.env.local` file in the root directory of the project by copying the `.env.sample` file:

    ```bash
    cp .env.sample .env.local
    ```

2. Open the `.env.local` file and replace the placeholder values with your actual environment variables. For example:

    ```dotenv
    NEXT_PUBLIC_MISTRAL_API_KEY=your_actual_api_key
    ```

### Running the Application

To start the development server, run:

```bash
npm run dev