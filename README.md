# Blockchain Explorer

This is a Next.js app built with tailwindcss that allows to show last 10 transactions in the block for ethereum and polygon.

## Assumptions:

- The app will only show latest 10 transactions in the block
- sender's address balance is shown in the transaction details page
- currently, transaction details route will be the same for both ethereum and polygon. (Later, this can be separated by chain prefix)
## Setup Procedures

To get started, follow these steps:

1. Clone the repository: `git clone https://github.com/tiff0000/blockchain-transaction-explorer.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

The app should now be running on [http://localhost:3000](http://localhost:3000).


## Folder Structure

- `pages/` - contains the pages of the app
- `public/` - contains static files such as images and fonts
- `styles/` - contains global styles and tailwindcss configuration
- `components/` - contains reusable components used throughout the app
- `hooks/` - contains custom React hooks used throughout the app
- `lib/` - contains utility functions and blockchain API integration

## Design System

The app uses tailwindcss as its design system. Tailwindcss is a utility-first CSS framework that provides a set of pre-defined classes that can be used to quickly style the app. The `styles/` folder contains the tailwindcss configuration file and any additional global styles.

The app also uses reusable components to provide a consistent design throughout the app. These components are located in the `components/` folder and can be easily customized using tailwindcss classes.



