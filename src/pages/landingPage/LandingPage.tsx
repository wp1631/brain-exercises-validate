import React from 'react';
import './LandingPage.css';
// import AppHeader from '../.././components/appHeader/AppHeader';
import GameSelectionCard from '../../components/gameSelectionCard/gameSelectionCard';
import BreadCrumb from '../.././components/breadcrumbs/breadCrumb';
import GameCards from '../.././components/gameCards/GameCards';
import RotateAlert from '../../components/rotateAlert/RotateAlert';

const gameInfos = [
  {
    name: 'จำจด กดตาม',
    title: 'Spatial span',
    domain: 'ความจำ',
    gameUri: 'spatial-span',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'เขียวไป แดงหยุด',
    title: 'Go No-go',
    domain: 'สมาธิ',
    gameUri: 'go-nogo',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]

function LandingPage() {
  return (
    <div className='h-screen w-full bg-slate-50'>
      <div id='LandingPageHeader' className='py-4 px-12 sm:py-8 w-full bg-blue-100 shadow-md'>
          {<BreadCrumb />}
      </div>
      <div className='w-full px-8 sm:px-12 py-12 sm:py-24'>
          <div id='LandingPageBody'>
            {<GameSelectionCard games={gameInfos} />}
          </div>
      </div>
        {<RotateAlert />}
    </div>
  )
}

export default LandingPage