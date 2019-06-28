/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { GROUPS } from '../../../.storybook/hierarchySeparators';

import withTests from '../../util/withTests';
import Selector from './Selector';

storiesOf(`${GROUPS.COMPONENTS}|Selector`, module)
  .addDecorator(withTests('Selector'))
  .add('Default Selector', withInfo()(() => <Selector>Select me!</Selector>))
  .add(
    'Disabled Selector',
    withInfo()(() => <Selector disabled>I cannot be selected</Selector>)
  )
  .add(
    'Selected Selected',
    withInfo()(() => <Selector selected>I am selected!</Selector>)
  );
