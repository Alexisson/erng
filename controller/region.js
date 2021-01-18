import cheerio from 'cheerio';
import axios from 'axios';
import mongoose from 'mongoose';
import Country from '../model/Country.js';

export const Region = async url => {

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    let region = [];

    for (let i = 1; i < 10; i++) {
        region.push({
            region_name: $(`#mytable > tbody > tr:nth-child(${i}) > td:nth-child(2)`).text(),
            region_code: $(`#mytable > tbody > tr:nth-child(${i}) > td:nth-child(1)`).text()
        });
    }
    const country = new Country({
        country_name: 'Киргизская Республика',
        country_code: '04',
        region
    })
    await country.save()
}