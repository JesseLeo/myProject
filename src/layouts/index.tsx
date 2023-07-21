import './index.less'

export default function Layout() {
  return (
    <div className="content">
      <div className="left">
        <div className="info">
          <div className="avatar"></div>
          <div className="name">CARINA GENG</div>
          <div className="level">
            <div className="level-ava"></div>
            <div className="number">Level 3</div>
            <div className="icon">?</div>
          </div>
        </div>
        <div className="XP">
          <div className="today">
            <span className='today-name'>Today’s XP
            </span>
            <span className="today-num">50</span>
          </div>
          <div className="split">/</div>
          <div className="today">
            <span className='today-name'>total XP
            </span>
            <span className="today-num">750/800</span>
          </div>
        </div>
        <div className="pic">
          <div className="lp"></div>
          <div className="cp"></div>
          <div className="rp"></div>
        </div>
        <div className="button">View all badges</div>
      </div>
      <div className="right">
        <div className="quests">
          <div className="total-name">
            <div className="name">Daily</div>
            <div className="l-name">Quests</div>
          </div>
          <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="140" viewBox="0 0 139 140" fill="none">
              <circle cx="69.5" cy="70.3037" r="68.5" stroke="white" stroke-width="2" stroke-linecap="square" />
              <circle opacity="0.5" cx="69.5" cy="70.3037" r="61.25" fill="black" stroke="#5C5C5C" stroke-width="0.5" />
            </svg>
            <div className="lc">Claimed</div>
            <div className="line"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
              <circle cx="69.905" cy="70.2064" r="68.5" stroke="#5C5C5C" stroke-width="2" />
              <g clip-path="url(#clip0_1_301)">
                <circle cx="69.905" cy="70.2064" r="68.5" stroke="white" stroke-width="2" />
              </g>
              <defs>
                <clipPath id="clip0_1_301">
                  <rect width="94" height="89" fill="white" />
                </clipPath>
              </defs>
              <circle cx="69.905" cy="70.2064" r="61.25" fill="white" stroke="#5C5C5C" stroke-width="0.5" />
            </svg>
            <div className="cc">
              <div className="top">Complete 10 Quest</div>
              <div className="bot">6/10</div>
            </div>
            <div className="line"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
              <circle cx="69.905" cy="70.2064" r="68.5" stroke="#5C5C5C" stroke-width="2" />
              <g clip-path="url(#clip0_1_301)">
                <circle cx="69.905" cy="70.2064" r="68.5" stroke="white" stroke-width="2" />
              </g>
              <defs>
                <clipPath id="clip0_1_301">
                  <rect width="94" height="89" fill="white" />
                </clipPath>
              </defs>
              <circle cx="69.905" cy="70.2064" r="61.25" fill="none" stroke="#5C5C5C" stroke-width="0.5" />
            </svg>
            <div className="rc">
              <div className="top">Complete 20 Quest</div>
              <div className="bot">6/20</div>
            </div>
          </div>
          <div className="btns">
            <div className="cla">Claim</div>
            <div className="lea">Start Learning</div>
          </div>
        </div>
        <div className="milestones">
          <div className="header">
            <div className="name">Milestones</div>
            {/* <div className="navs">
              <div className="ele">{`</ Course Completion >`}</div>
              <div className="ele">Quest Winning Streak</div>
              <div className="ele">Track Completion</div>
            </div> */}
          </div>
          <div className="infomations">
            <div className="infomation">
              <div className="info-name">Complete 3 Syntax</div>
              <div className="info-num">25</div>
              <div className="speed"><svg xmlns="http://www.w3.org/2000/svg" width="275" height="12" viewBox="0 0 275 12" fill="none"><path d="M0 6C0 2.68629 2.68629 0 6 0H269C272.314 0 275 2.68629 275 6C275 9.31371 272.314 12 269 12H5.99999C2.68629 12 0 9.31371 0 6Z" fill="#505050" />
                <path d="M0 5C0 2.23858 2.23858 0 5 0H103C105.761 0 108 2.23858 108 5C108 7.76142 105.761 10 103 10H5C2.23858 10 0 7.76142 0 5Z" fill="#F2F2F2" />
              </svg></div>
              <div className="speed-num">1/3</div>
              <div className="btn">Claim</div>
            </div>
            <div className="infomation">
              <div className="info-name">Complete 6 Syntax</div>
              <div className="info-num">50</div>
              <div className="speed"><svg xmlns="http://www.w3.org/2000/svg" width="275" height="12" viewBox="0 0 275 12" fill="none"><path d="M0 6C0 2.68629 2.68629 0 6 0H269C272.314 0 275 2.68629 275 6C275 9.31371 272.314 12 269 12H5.99999C2.68629 12 0 9.31371 0 6Z" fill="#505050" />
              <path d="M0 5C0 2.23858 2.23858 0 5 0H56C58.7614 0 61 2.23858 61 5C61 7.76142 58.7614 10 56 10H5C2.23858 10 0 7.76142 0 5Z" fill="#F2F2F2"/>
              </svg></div>
              <div className="speed-num">1/6</div>
              <div className="btn-to">Start Learning</div>
            </div>
            <div className="infomation">
              <div className="info-name">Complete 10 Syntax</div>
              <div className="info-num">120</div>
              <div className="speed"><svg xmlns="http://www.w3.org/2000/svg" width="275" height="12" viewBox="0 0 275 12" fill="none"><path d="M0 6C0 2.68629 2.68629 0 6 0H269C272.314 0 275 2.68629 275 6C275 9.31371 272.314 12 269 12H5.99999C2.68629 12 0 9.31371 0 6Z" fill="#505050" />
              <path d="M0 5C0 2.23858 2.23858 0 5 0H34C36.7614 0 39 2.23858 39 5C39 7.76142 36.7614 10 34 10H5C2.23858 10 0 7.76142 0 5Z" fill="#F2F2F2"/>
              </svg></div>
              <div className="speed-num">1/10</div>
              <div className="btn-to">Start Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
