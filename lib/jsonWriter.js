/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-param-reassign */

const Promise = require('bluebird');
const _ = require('lodash');
const ejs = require('ejs');
const path = require('path');

const pejs = Promise.promisifyAll(ejs);
const validUrl = require('valid-url');
const i18n = require('i18n');
const prettyMarkdown = require('./prettyMarkdown');
const writeFile = require('./writeFiles');

const relativePath = (full, base) => {
  full = full.replace(/\\/g, '/');
  base = base.replace(/\\/g, '/');
  if (full.indexOf(base) === 0) {
    return full.substr(base.length).replace(/\.json$/, '');
  } else {
    return full;
  }
};

const directory = (full, base) => relativePath(full, base).replace(/[^/]+$/, '');

/**
 * Generates a README.md file from the `schemas` passed in at directory `out`
 * @param {array[string]} paths - path of generated markdown files
 * @param {map} schemas - map of resolved schemas
 * @param {string} out - output directory
 * @param {string} base - schema base directory
 */
const generateNewJsonSiderbar = (sidebar, out) => {
  return writeFile(out, 'sidebars.json', JSON.stringify(sidebar));
};

module.exports = generateNewJsonSiderbar;
