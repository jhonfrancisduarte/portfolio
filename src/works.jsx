import React, { useEffect , useRef} from 'react';

const scrollToWelcome = () => {
    const welcomeSection = document.getElementById('welcome');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToContactMe = () => {
    const welcomeSection = document.getElementById('contact-me');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToAboutMe = () => {
    const welcomeSection = document.getElementById('aboutme');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


const Works = () => {

    const containerRef = useRef(null);
    const COL_COUNT = 4; // Set this to however many columns you want
    const blockHeights = new Array(COL_COUNT).fill(0);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const blocks = container.children;
            for (let i = 0; i < blocks.length; i++) {
                const order = (i + 1) % COL_COUNT || COL_COUNT;
                blocks[i].style.order = order;
                blockHeights[order - 1] += parseFloat(blocks[i].style.height);
            }
            const highest = Math.max(...blockHeights);
            container.style.height = `${highest}px`;
        }
    }, []);

    return(
        <div className="works" id='my-works-content'>
            <div className="works-content">
                <div className="content-scroll">
                    <div className="my-works-navigation">
                        <p><span onClick={scrollToWelcome}>Home </span>
                            <span onClick={scrollToAboutMe}>| About Me </span>
                            <span onClick={scrollToContactMe}>| Contact Me </span>
                        </p>
                    </div>
                    <h1 className="my-works-title">My Works</h1>
                    <div className="works-line"></div>

                    <div ref={containerRef} id="block-contain">
                        <div className="block" style={{ height: '200px' }}>
                            <div className="inner">1</div>
                        </div>
                        <div className="block" style={{ height: '230px' }}>
                            <div className="inner">2</div>
                        </div>
                        <div className="block" style={{ height: '150px' }}>
                            <div className="inner">3</div>
                        </div>
                        <div className="block" style={{ height: '280px' }}>
                            <div className="inner">4</div>
                        </div>
                        <div className="block" style={{ height: '220px' }}>
                            <div className="inner">5</div>
                        </div>
                        <div className="block" style={{ height: '180px' }}>
                            <div className="inner">6</div>
                        </div>
                        <div className="block" style={{ height: '210px' }}>
                            <div className="inner">7</div>
                        </div>
                        <div className="block" style={{ height: '270px' }}>
                            <div className="inner">8</div>
                        </div>
                        <div className="block" style={{ height: '160px' }}>
                            <div className="inner">9</div>
                        </div>
                        <div className="block" style={{ height: '220px' }}>
                            <div className="inner">10</div>
                        </div>
                        <div className="block" style={{ height: '190px' }}>
                            <div className="inner">11</div>
                        </div>
                        <div className="block" style={{ height: '270px' }}>
                            <div className="inner">12</div>
                        </div>
                    </div>

                    <h4 className="my-works-title2">More projects will be added soon</h4>
                </div>
            </div>
        </div>
    );
}

export default Works;