# xSpotlight Clone
This project is a replica of xSpotlight, using the APIs provided by MultiversX to view and navigate collections and nfts.<br>
<b>In this app you cannot intaract with blockchain (connect your wallet, buy/sell nfts).</b>
## Purpose
This project was developed as a hands-on exercise to learn more about integrating third-party APIs into Angular applications, as well as refining skills in Angular and Tailwind.

All the Apis from MultiversX: https://api.multiversx.com/

### The project can be found here: https://x-spothlight-clone.vercel.app/

## Overview
![Screenshot 2023-10-31 at 17 41 42](https://github.com/DanielTomaCucu/xSpothlight_clone/assets/61708051/62588cb4-bf41-4127-98b9-827930b97ed6)

The application fetches and displays data by making HTTP requests to the MultiversX APIs. Users can explor collections of nfts in a manner similar to the native xSpotlight.

## Performance Considerations
Users might occasionally experience a slight delay when navigating between pages. This lag is primarily due to the rate limits imposed on the API: it allows only 2 calls per second.

## Features
Data Exploration: Dive deep into blockchain data, visualizing transactions, collections, NFTs and more. Responsive Design: Optimized for various screen sizes ensuring a smooth user experience across devices. Rate Limit Handling: The application is designed to handle API rate limits gracefully, ensuring data integrity and user feedback.

