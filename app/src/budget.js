import React, { Component } from 'react';
import '../keys.cfg';

var plaid = Plaid.create({
  clientName: 'abhishek budgeting',
  env: 'development',
  key: '72992b16147a7b0433777d2f16fdb4',
  product: ['transactions'],

})


linkPlaid = (public_token, metadata) => {

}
