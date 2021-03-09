import React from 'react';

import { Anchor } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  return (
    <div className='container-fluid'>
      <div className='header'>
        <div className='logo'>
          <i className='fas fa-bolt'></i>
          <a href='https://ressum-portfolio.herokuapp.com/'>DLCC</a>
        </div>

        <Anchor targetOffset='65'>
          <Link href='#hero' title='Home' />
          <Link href='#about' title='About' />
          <Link href='#feature' title='Feature' />
          <Link href='#works' title='How it Works' />
          <Link href='#faq' title='Faq' />
          <Link href='#pricing' title='pricing' />
          <Link href='#contact' title='contact' />
        </Anchor>
      </div>
    </div>
  );
}

export default AppHeader;
