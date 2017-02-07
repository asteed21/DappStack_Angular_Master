'use strict';

angular.module('dappstackApp.components.dapps')

    .controller('DappsController', function() {
        this.dapps = [
            {
                name: 'Money Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 14,
                numOfFavorites: 5
            },
            {
                name: 'Property Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 43,
                numOfFavorites: 11
            },
                {
                name: 'Writing Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 14,
                numOfFavorites: 5
            },
            {
                name: 'Contract Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 43,
                numOfFavorites: 11
            },
                {
                name: 'Test Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 14,
                numOfFavorites: 5
            },
            {
                name: 'Property Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 43,
                numOfFavorites: 11
            },
                {
                name: 'Shipping Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 14,
                numOfFavorites: 5
            },
            {
                name: 'DAO Dapp',
                thumbnailDescription: 'A summary of up to 40 characters.',
                logoImage: './images/yeoman.png',
                numOfLikes: 43,
                numOfFavorites: 11
            }
        ]
    });