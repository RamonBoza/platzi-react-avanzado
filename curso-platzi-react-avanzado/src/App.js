import React from 'react'
import {ListOfCategories} from "./components/ListOfCategories";
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo } from "./components/Logo";
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <div>
    <Logo/>
    <GlobalStyle/>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </div>

);
