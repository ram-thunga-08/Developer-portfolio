import './waves.scss'
import gsap from "gsap";
import { useRef, useLayoutEffect, useState, useEffect } from 'react';

const Waves = () =>{

    const hexagons = useRef();
    const [offsetY, setOffsetY] = useState(0);
    const [scale, setScale] = useState(1);
    const handleScroll = ()=>  {
        setOffsetY(window.pageYOffset);
        setScale(1 + window.pageYOffset/400);
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useLayoutEffect(() => {
    
        const ctx = gsap.context(() => {
        // Target all hexagons elements we have asigned the vector-line class
            gsap.from(".vector-line", {
                duration: 5,
                opacity: 0,
                stagger: 0.2,
                ease: "elastic",
                yoyo: true,
                repeat: -1
            }); 
            gsap.from(".vector-line", {
                stagger: 0.2,
                duration: 5,
                rotate: 180,
                transformOrigin: "center",
                yoyo: true,
                repeat: -1
            });
        }, hexagons);// <- Scope!
        
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="header">

            {/* <!--Content before waves--> */}
                <div className="container inner-header flex-centered" style={{transform: `translateY(${ offsetY * 0.5}px)`}}>
                    <h1>RAM THUNGA</h1>
                    <h4>Software Developer</h4>
                </div>
            {/* <!--Hexagons Container--> */}
                <div className='hexagons' ref={hexagons}>
                    <svg className="bg-background"  style={{transform: `translateX(${ offsetY * 0.8}px)scale(${0.3 + scale})`}} width="1111" height="1237" viewBox="0 0 1111 1237" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 1">
                            <path  className="vector-line" id="Vector" opacity="0.8" d="M572.3 935.5C561.2 935.5 550.1 933 539.9 928L321 821.2C297.3 809.6 281.4 786.1 279.6 759.8L262.6 516.8C260.8 490.5 273.2 465 295.1 450.2L497 314C518.9 299.2 547.2 297.3 570.9 308.8L789.8 415.6C813.5 427.2 829.4 450.7 831.2 477L848.2 720C850 746.3 837.6 771.8 815.7 786.6L613.8 922.8C601.4 931.2 586.9 935.5 572.3 935.5ZM538.4 302.5C524.1 302.5 509.8 306.7 497.6 314.9L295.7 451.2C274.2 465.7 261.9 490.8 263.7 516.7L280.7 759.7C282.5 785.6 298.1 808.8 321.5 820.2L540.4 927C563.7 938.4 591.6 936.4 613.2 921.9L815.1 785.7C836.6 771.2 848.9 746.1 847.1 720.2L830.1 477.2C828.3 451.3 812.7 428.1 789.3 416.7L570.4 309.9C560.3 304.9 549.3 302.5 538.4 302.5Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_2" opacity="0.6" d="M605.8 958.8C597 958.8 588.2 957.4 579.7 954.4L329.4 868.2C302.3 858.9 282.1 835.6 276.6 807.5L226 547.6C220.5 519.5 230.6 490.3 252.2 471.5L452.1 297.7C473.7 278.9 504 273 531.1 282.3L781.4 368.5C808.5 377.8 828.7 401.1 834.2 429.2L884.7 689.1C890.2 717.2 880.1 746.4 858.5 765.2L658.7 939C643.9 951.9 625 958.8 605.8 958.8ZM505 279.2C486.1 279.2 467.5 285.9 452.9 298.6L253 472.3C231.7 490.8 221.8 519.6 227.2 547.3L277.7 807.2C283.1 834.9 303 857.9 329.7 867.1L580 953.3C606.7 962.5 636.5 956.7 657.9 938.2L857.7 764.5C879 746 888.9 717.2 883.5 689.5L833 429.6C827.6 401.9 807.7 378.9 781 369.7L530.7 283.5C522.3 280.6 513.6 279.2 505 279.2Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_3" opacity="0.44" d="M644.2 979.5C638.2 979.5 632.1 978.9 626.1 977.6L344.6 917.8C314.1 911.3 289.2 888.9 279.6 859.3L190.7 585.6C181.1 556 188 523.2 208.9 500.1L401.5 286.2C422.3 263.1 454.2 252.7 484.7 259.2L766.1 319C796.6 325.5 821.5 347.9 831.1 377.5L920 651.2C929.6 680.8 922.7 713.6 901.8 736.7L709.3 950.6L708.9 950.2L709.3 950.6C692.6 969.2 668.7 979.5 644.2 979.5ZM466.6 258.4C442.4 258.4 418.9 268.6 402.4 286.9L209.8 500.8C189.2 523.6 182.4 556 191.9 585.2L280.8 858.9C290.3 888.1 314.9 910.2 344.9 916.6L626.4 976.4C656.5 982.8 687.9 972.6 708.4 949.7L901 736C921.6 713.2 928.4 680.8 918.9 651.6L830 377.9C820.5 348.7 795.9 326.6 765.9 320.2L484.4 260.3C478.5 259 472.5 258.4 466.6 258.4Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_4" opacity="0.33" d="M687.5 996.9C684.8 996.9 682 996.8 679.3 996.5L367.7 969.2C334 966.3 304.2 945.4 289.9 914.7L157.7 631.3C143.4 600.6 146.6 564.4 166 536.7L345.4 280.4C364.8 252.7 397.8 237.3 431.5 240.3L743.1 267.5C776.8 270.4 806.6 291.3 820.9 322L953.1 605.5C967.4 636.2 964.2 672.4 944.8 700.1L765.4 956.4C747.6 981.8 718.3 996.9 687.5 996.9ZM158.7 630.8L290.9 914.3C305 944.6 334.5 965.2 367.8 968.1L679.4 995.4C712.7 998.3 745.3 983.1 764.4 955.7L943.8 699.5C963 672.1 966.1 636.3 952 606L819.9 322.5C805.8 292.2 776.3 271.6 743 268.7L431.4 241.4C398.1 238.5 365.5 253.7 346.4 281.1L166.9 537.3C147.7 564.7 144.6 600.5 158.7 630.8Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_5" opacity="0.25" d="M395.8 1021.8C360.4 1021.8 327.1 1003.4 308.3 973.3L128.1 684.9C108.6 653.7 107.2 614.2 124.5 581.8L284.1 281.6C301.4 249.1 334.9 228.2 371.6 226.9L711.4 215C748.1 213.7 783 232.3 802.5 263.5L982.7 551.9C1002.2 583.1 1003.6 622.6 986.3 655L826.7 955.2C809.4 987.7 775.9 1008.6 739.2 1009.9L399.4 1021.8C398.2 1021.8 397 1021.8 395.8 1021.8ZM711.4 215.6V216.2L371.6 228.1C335.3 229.4 302.1 250.1 285.1 282.2L125.5 582.4C108.4 614.5 109.8 653.6 129.1 684.4L309.3 972.8C328.6 1003.6 363.1 1022 399.4 1020.7L739.2 1008.8C775.5 1007.5 808.7 986.8 825.7 954.7L985.3 654.5C1002.4 622.4 1001 583.3 981.7 552.5L801.6 264.1C782.3 233.3 747.8 214.9 711.5 216.2L711.4 215.6Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_6" opacity="0.19" d="M423.1 1075.5C389.6 1075.5 357.3 1060.4 335.8 1033.9L103.2 746.8C78.1 715.8 71.4 673.3 85.7 636.1L218.1 291C232.4 253.7 265.8 226.7 305.2 220.4L670.2 162.6C709.6 156.4 749.7 171.7 774.9 202.8L1007.6 490C1032.7 521 1039.5 563.5 1025.1 600.7L892.7 945.7L892.2 945.5L892.7 945.7C878.4 983 845 1010 805.6 1016.3L440.6 1074.1C434.7 1075.1 428.9 1075.5 423.1 1075.5ZM687.7 162.4C682 162.4 676.2 162.8 670.5 163.8L305.5 221.6C266.5 227.8 233.4 254.5 219.3 291.4L86.9 636.4C72.7 673.3 79.4 715.3 104.3 746L336.9 1033.2C361.8 1063.9 401.5 1079.1 440.5 1073L805.5 1015.2C844.5 1009 877.6 982.3 891.7 945.4L1024.1 600.4C1038.3 563.5 1031.6 521.5 1006.7 490.8L774.1 203.5C752.9 177.3 720.9 162.4 687.7 162.4Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_7" opacity="0.14" d="M458.4 1130C427.2 1130 396.6 1118 373.6 1095.8L84.6 816.7C53.4 786.6 40.5 741.7 51 699.6L148.2 309.8C158.7 267.7 191.1 234.1 232.8 222.2L619 111.5C660.7 99.5 706 110.8 737.2 141L1026.2 420.1C1057.4 450.2 1070.3 495.1 1059.8 537.2L962.6 927C952.1 969.1 919.7 1002.7 878 1014.6L491.8 1125.3C480.8 1128.4 469.5 1130 458.4 1130ZM652.4 108C641.3 108 630.2 109.5 619.3 112.6L233.2 223.4C191.9 235.2 159.8 268.5 149.4 310.2L52.2 700C41.8 741.7 54.5 786.1 85.5 816L374.5 1095.1C405.4 1124.9 450.3 1136.1 491.6 1124.3L877.8 1013.6C919.1 1001.8 951.2 968.5 961.6 926.8L1058.8 537C1069.2 495.3 1056.5 450.9 1025.5 421L736.5 141.9C713.6 119.8 683.3 108 652.4 108Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_8" opacity="0.09" d="M502.3 1184.1C473.9 1184.1 445.8 1175 422.5 1157.5L73.8 894.7C36.2 866.3 16.3 819.6 22.1 772.9L75.3 339.5C81 292.7 111.6 252.2 155 233.8L556.9 63.2L557.1 63.7L556.9 63.2C600.3 44.8 650.6 51 688.3 79.3L1037 342.1C1074.6 370.5 1094.5 417.2 1088.7 463.9L1035.5 897.3C1029.8 944.1 999.2 984.6 955.8 1003L553.9 1173.6C537.3 1180.7 519.8 1184.1 502.3 1184.1ZM608.5 53.8C591.2 53.8 573.8 57.2 557.4 64.2L155.4 234.8C112.4 253.1 82.1 293.2 76.4 339.6L23.2 773C17.5 819.4 37.1 865.6 74.5 893.8L423.2 1156.6C460.5 1184.7 510.4 1190.8 553.4 1172.6L955.3 1002C998.3 983.7 1028.6 943.6 1034.3 897.2L1087.5 463.8C1093.2 417.4 1073.6 371.2 1036.2 343L687.6 80.2C664.5 62.8 636.6 53.8 608.5 53.8Z" fill="#E8E8E8" />
                            <path  className="vector-line" id="Vector_9" opacity="0.05" d="M555.4 1236.8C530.5 1236.8 505.7 1230.4 483.5 1217.6L72.5 980.3C28.1 954.7 0.599976 907 0.599976 855.7V381.1C0.599976 329.9 28.2 282.2 72.5 256.5L483.5 19.2C527.9 -6.4 583 -6.4 627.3 19.2L1038.3 256.5C1082.7 282.1 1110.2 329.8 1110.2 381.1V855.7C1110.2 906.9 1082.6 954.6 1038.3 980.3L627.3 1217.6C605.1 1230.4 580.3 1236.8 555.4 1236.8ZM555.4 1.20002C530.7 1.20002 506.1 7.60001 484.1 20.3L73 257.5C29 282.9 1.69997 330.2 1.69997 381V855.6C1.69997 906.4 29 953.7 73 979.1L484 1216.4C528 1241.8 582.7 1241.8 626.7 1216.4L1037.7 979.1C1081.7 953.7 1109 906.4 1109 855.6V381.1C1109 330.3 1081.7 283 1037.7 257.6L626.7 20.3C604.7 7.50001 580.1 1.20002 555.4 1.20002Z" fill="#E8E8E8" />
                        </g>
                    </svg>
                </div>
            {/* Hexagons end */}
            {/* Waves Container */}
               <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(216, 215, 196, 0.7)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgb(216, 215, 196,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgb(255, 255, 255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(0,0,0,1)" />
                        </g>
                    </svg>
                </div>
            {/* <!--Waves end--> */}

            </div>
            {/* <!--Header ends--> */}
        </>
    )
}

export default Waves