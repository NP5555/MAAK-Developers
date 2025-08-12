import React from 'react'


const FunFact = (props) => {
// THESE ARE REAL NUMBERS FOR  MAAK DEVELOPERS
    const funfact = [
        {
            title: '70+',
            subTitle: 'Years Of Experience',
        },
        {
            title: '80+',
            subTitle: 'Expert Specialists',
        },
        {
            title: '20+',
            subTitle: 'Successful Projects',
        },
        {
            title: '1100+',
            subTitle: 'Happy Customers',
        },
    ]


    return (

        <section className={`wpo-fun-fact-section pb-120 ${props.fnClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;