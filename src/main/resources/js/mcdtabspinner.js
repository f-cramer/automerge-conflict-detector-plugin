/*
 * Copyright 2017 Vestmark, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except 
 * in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express 
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

AJS.$(function() {
  AJS.$(".menu-item[data-module-key='mcd.pull-request.nav.conflicts']").on('click', function() {
    if (!AJS.$(this).is('.active-tab')) {
      AJS.$('.tabs-pane').empty().css('height', '434px');
      AJS.$('.tabs-pane').spin('large');
    }
  });
});