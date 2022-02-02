// https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp2(nums);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Check all paths.  Cache the path we've already been to
let dp = (nums) => {
    // Special cases
    if (!nums || nums.length == 0) return false;
    if (nums.length == 1) return nums[0] >= 0;

    // Track whether nums[i] can reach the last index from Cache[i]
    let cache = [];

    // Go through each element in nums, backward
    for (let i=nums.length-2; i>=0; i--) {
        //console.log(`  nums[${i}]`);

        // Default value
        cache[i] = false;

        // Check all the jump distances
        for (let j=nums[i]; j>0; j--) { 
            // If we can jump to an index that can jump to last index, then found a path
            if (cache[i+j] == true) {
                //console.log(`    + ${j} = ${i+j} == ${nums.length-1} -> Found a path`);
                cache[i] = true;
                break;
            }
            // If we can jump directly to last index, then found a path
            else if (i+j >= nums.length-1) {
                //console.log(`    + ${j} = ${i+j} == ${nums.length-1} -> Found a direct path`);
                cache[i] = true;
                break;
            } 
            else {
                //console.log(`    + ${j} = ${i+j} != ${nums.length-1}`);
            }
        }
    }

    return cache[0];
};

// Same as dp above, but only keeping track of the "last" (smallest index) that can jump to the end.
// https://leetcode.com/problems/jump-game/discuss/20900/Simplest-O(N)-solution-with-constant-space
let dp2 = (nums) => {
    // This is the lowest index that can reach last index
    let minSolution = nums.length-1;

    for (let i=nums.length-2; i>=0; i--) {
        if (i + nums[i] >= minSolution) {
            minSolution = i;
        }
    }

    return minSolution <= 0;
};

let inputs = [
    { nums:[0], output:true },
    { nums:[1], output:true },
    { nums:[0,1], output:false },
    { nums:[1,1], output:true },
    { nums:[2,3,1,1,4], output:true },
    { nums:[3,2,1,0,4], output:false },
    { nums:[6682,16707,8168,2839,9141,19376,13403,17232,11781,574,2008,4407,10723,8024,6213,15698,7539,13712,435,9072,9660,16547,10363,4520,19486,14150,19989,19092,15618,8062,17383,9567,3059,16503,11405,11013,6187,12361,19959,10286,13416,14978,4320,16853,19314,9137,17530,7418,16194,7867,14459,14189,11145,8283,1763,10208,2330,13766,13501,14025,4633,10767,164,7163,9050,13299,13480,17258,6193,522,1560,9199,8377,100,11270,16454,19015,2483,8484,19787,7587,6078,9972,3676,10601,2880,18021,17049,18639,8211,8820,12656,6792,14161,11771,17723,1743,10742,2654,19344,10692,6966,16504,6952,274,1235,15604,10461,871,12068,14555,19043,6637,17768,3630,8541,1105,12199,8555,4692,9744,13776,1786,13888,5316,18017,13247,18892,4150,10289,13246,15090,17816,7307,8048,11512,412,5211,4725,5942,19608,9425,4954,2602,2573,11330,1213,5634,9425,774,4863,7598,5910,10527,14910,5066,19442,8188,4154,17145,15493,17617,8556,7568,19722,19675,7599,8844,19547,4437,2768,7593,1608,954,11787,9453,12889,5760,19173,18548,5716,18422,10701,18852,8571,1853,6092,14069,1620,3669,14600,306,9312,4354,6929,2993,8449,2181,8048,19734,2760,12619,5902,19172,7509,4855,19938,468,3874,15226,4388,19348,2871,216,4648,18647,15996,4038,11083,2921,10181,5091,13132,3228,5967,7413,4642,1678,8438,14010,8149,5648,279,10726,10108,18003,360,15209,6488,1962,5519,10301,4695,17551,18355,1155,7445,17400,18315,3,5934,27,17893,2111,7738,2241,7449,6630,19385,19112,9083,16313,10768,8005,9381,3090,11746,12716,3398,16877,17747,15079,10158,12035,12059,17300,5840,13617,697,6748,1609,14008,13174,19103,12954,15429,9135,10444,1378,6150,12424,7768,9449,9264,8438,576,8025,8961,5641,7315,2110,6857,6497,15559,5463,18468,3713,14994,9918,6457,15605,17119,2460,10717,12518,11817,19894,2255,7618,15717,1012,493,5780,10346,3028,19305,17428,2667,18144,11713,9507,5289,18715,6268,3821,17406,17881,17561,11429,11790,16633,10977,14627,18005,18612,7264,18058,11335,9298,15892,8278,10367,17616,7590,8218,6736,2780,6745,13107,19435,6039,15665,10914,8389,319,10750,7018,2625,5681,11304,5520,735,10232,1761,16572,12613,2431,9947,2653,13812,19685,5119,11917,12504,14965,4409,4132,10100,17725,2503,1798,3783,1890,12723,6343,7552,877,1496,15100,1243,13388,2131,12477,13664,5900,12827,11596,14114,12234,166,15530,5754,9684,5528,8599,2772,16467,8127,19469,8315,18813,19489,16696,11976,11660,1844,19212,15967,2776,18992,7455,19739,14415,1471,11619,14588,14581,11700,9545,366,7340,16765,10621,14424,18878,11519,4238,5197,17260,12535,1793,10188,8413,14852,11438,7197,19782,16452,16634,7462,15875,4150,5122,5811,9863,6717,10638,12888,6893,13006,3631,6609,10808,12226,2365,12548,16646,4621,3335,8802,10971,19435,3620,1967,18515,13128,11705,4449,5734,2538,17895,10362,16056,8670,12263,13980,9437,8311,6046,4864,6611,18845,5059,18564,10691,5930,6367,14551,14188,16992,7637,8815,17339,15918,10977,6932,9608,19056,1742,1986,3469,6329,4600,3888,12247,7196,6335,10708,16373,19409,16407,3713,1033,16097,7844,9872,1367,6732,12802,11073,1593,7092,12643,7976,13220,18565,18657,8380,2059,14860,17840,14550,5815,14715,5394,951,18236,5966,9218,6221,18152,17477,2097,12848,16502,5786,922,11598,6516,9771,13124,216,255,19505,18783,362,1590,11682,3303,17509,18681,14120,8958,16980,4183,9354,10215,587,13119,5306,11762,15145,10822,3323,19437,17527,146,3364,1939,16511,15116,4663,3222,14379,13518,2747,4906,10080,16179,11350,10507,15761,4920,6682,8540,9578,5233,17769,7148,15322,15940,16750,15577,4431,1197,17380,13683,15664,653,12757,10387,11468,8161,10995,17173,15709,12664,17365,15543,4998,13516,988,10539,14757,5725,463,10508,19314,17570,6095,287,5877,8981,6014,16096,16495,7486,8587,9601,8837,4687,3946,16148,2366,14228,1426,5527,12281,4020,2248,14230,18148,8696,4564,896,10131,6421,2017,9277,2861,1505,3054,13423,10089,19830,14870,16344,14198,2940,12007,5964,14168,12470,18158,11752,7889,12463,6510,6488,929,19080,16232,19600,7066,15892,6674,4476,17500,17936,5479,11201,19000,9029,5470,15903,7505,15490,9347,19219,19850,16942,1047,14522,3034,17285,615,11301,19531,14928,14961,376,12792,11545,7921,13921,4681,16611,9452,12873,6346,1809,2977,10961,6275,12792,18479,17261,18306,16099,19324,15349,2833,3130,12015,3267,1790,9629,3208,18067,7762,13236,9903,15652,11411,9725,4132,2598,491,14017,12401,18130,16070,2114,11135,13974,7866,13428,17641,14387,11085,9794,17017,5204,19540,11490,548,5746,9525,6072,18251,11001,10297,341,11779,6513,4802,17754,13397,9273,4303,7792,2400,2194,15136,5263,10947,14848,3037,17633,604,7204,10428,17112,10293,10050,2312,14074,18507,11375,9293,972,305,19289,8203,18824,1614,11080,14357,4362,5626,14598,19468,628,2725,484,17951,10511,4025,13044,5881,1594,11790,14817,14028,9965,8871,14051,8500,7816,6216,15890,6557,13979,14385,10259,14367,18082,11790,5433,2471,19247,172,6871,5214,10529,16750,18883,3371,5890,7371,15541,19250,724,1602,10891,13667,3628,10684,19454,12893,9457,11117,3502,2523,11267,1981,12322,9753,12440,12954,14394,17976,15841,12102,19451,3653,6719,2346,19420,17536,3769,4530,14928,439,3073,508,4951,19458,17005,2185,983,18560,819,14881,9555,7972,16478,9067,6623,15020,19459,4717,855,5383,14422,15250,12143,17564,1809,13644,7412,19783,14169,8383,14644,3650,11704,19703,19301,19086,4595,7729,13115,18441,18955,2658,2309,2631,9041,16225,12837,3139,14907,10482,13892,6026,15382,1948,1112,11850,3310,5314,16388,5564,3460,15023,7351,14606,15769,9853,19739,9045,3854,1915,9732,13733,6077,18421,17144,9156,5581,18291,6364,9064,13184,7367,4763,1950,9530,9841,5488,4931,16713,12790,15389,3493,932,17632,18045,2973,11718,14287,11180,14537,2282,10194,7325,3365,2820,15223,4123,9234,12503,6031,5246,15734,18597,6434,5443,7778,18624,8270,15105,1370,12966,19587,15013,2652,14405,16969,1793,18322,1703,18289,3291,11523,16399,1937,6429,3389,2958,4292,17367,9657,1334,8572,1828,11722,772,9255,13986,17035,18329,7376,12614,17361,11880,3099,13705,9829,18970,17261,8532,15206,12872,11074,9255,14400,16024,6416,17263,11800,2109,19410,18924,16073,14049,53,18920,11742,4989,9596,19768,714,494,10658,16458,19412,5417,18284,98,11599,15955,697,17062,6957,13746,7720,5436,15499,9370,11869,7649,5847,18341,19244,4779,9002,13958,13275,10598,10343,17523,13638,1800,16115,715,9309,8541,2502,2883,5971,3784,14939,14234,19461,4923,13156,9086,6997,3660,4823,14619,18577,18499,4878,19448,5566,17310,3183,18652,18861,973,14779,15226,12765,13240,7517,6285,18629,7347,17226,10575,17664,4008,1157,5580,1434,2832,6417,5774,7647,14568,7862,10811,8783,736,13837,8245,10897,16261,1998,13108,7821,4810,5186,11934,5559,13486,5062,13301,3800,8551,14319,10495,17919,4510,16944,1514,8302,6794,906,2305,14480,18554,8758,10278,14245,15436,12212,1098,6684,18977,15405,15514,9641,14227,1735,2950,2492,10636,15204,5839,15316,9151,10081,7376,5877,797,15365,6639,13584,4163,1630,7417,19506,18956,13299,16313,241,7192,7207,6327,10063,15208,6984,15727,2573,19714,898,13299,19305,1326,14531,17960,8451,2088,3914,7213,7146,18376,7016,12064,11103,13314,3941,18584,7052,13058,3291,17057,9421,14134,9703,9191,3282,15806,7606,17322,4431,16713,4977,5577,2560,14626,1010,7154,15215,18734,18280,13755,17246,17200,16783,1158,9854,9273,12142,6240,9016,11209,17202,9046,5916,16499,7230,6394,16859,3458,10153,14627,3267,5218,16380,6743,12501,10903,3727,8678,6882,17870,17392,14059,6800,9713,10965,13906,6520,6126,16011,17860,10979,1835,9612,10962,6228,7184,11561,16771,3800,3921,3309,2947,10728,392,3755,7858,6512,11958,3241,2759,6191,14445,19738,12131,16504,6531,383,6869,11773,5692,18638,17945,17813,16731,19066,3133,14916,11180,11345,14059,13705,7668,569,11070,7298,18805,13027,13300,790,1191,8128,11176,12773,12894,6964,11265,1445,15395,1906,12553,5628,15936,12999,4898,5111,18793,16847,1314,12174,19005,7667,13652,9692,13239,6482,8846,18368,4514,13598,12762,10264,16737,15934,17290,3145,14462,3361,6153,18611,15738,16046,3680,10331,17841,15501,13288,15182,8299,17548,3025,2754,4945,17185,6429,6971,7455,12623,5729,13122,12516,19069,2882,3998,4097,7907,3499,15912,3776,13018,7007,14534,76,1458,2348,4254,6779,2259,14348,13584,19505,11836,1547,7645,10333,2257,17185,6286,2235,12638,10811,18203,19892,12474,15799,17917,3692,12674,6919,17498,4837,17378,13781,7253,971,8725,12432,9003,7813,14082,17207,14682,2411,12392,11201,12463,1156,5774,13399,14114,6784,4991,13658,10452,12394,3477,5253,18197,369,1350,7277,9323,18647,17150,1931,12761,4466,4577,8076,17214,7995,12609,5316,5783,6485,1707,9522,4751,487,13029,17751,610,6999,2928,15195,1784,17842,3124,17443,15709,17801,15388,17927,7495,12129,14308,3350,7708,17966,9762,11256,16617,18094,15213,18652,10140,8470,14704,14432,4608,12770,3492,16921,14327,13753,11423,86,3465,1130,757,11,9359,4180,3324,17229,6398,4460,9258,13079,16644,9933,19016,14114,3595,4162,11576,12199,7262,7879,3257,15861,3629,18305,255,4238,17347,918,16304,6847,8901,6386,6369,17282,16286,8923,13748,7396,3602,11363,17769,19628,1681,1739,12502,16549,980,13097,13430,16811,13820,2581,8780,13099,13666,123,2317,17451,2298,8413,19963,2841,13717,18878,13047,15345,7394,2828,12862,9167,6029,2601,2283,16400,3901,12240,18117,7361,9368,17346,2802,3552,6219,10503,16301,3510,7278,6613,8409,10327,8428,11958,13420,2851,3705,8949,15753,14494,4071,11682,17702,10504,18312,9274,18,19284,1764,6958,11879,19312,2739,5067,19282,5669,14139,3164,16377,3888,11953,11734,4264,15542,4168,1811,9725,4301,15019,16731,8024,680,6126,3297,19009,15583,1276,9751,17624,2099,4573,9887,13838,8341,12351,16002,1440,9477,18937,11825,18798,2141,3454,16677,13249,9478,18544,4055,7688,1350,4247,4197,16647,10837,8839,7463,6676,960,19633,2959,18738,10075,8664,9427,8939,11031,5852,17835,7891,13548,13153,19254,986,18386,16849,7988,11580,941,9235,10861,15717,10782,466,10295,18702,8310,5114,13965,15211,17651,17619,15544,19120,2415,17460,13434,14590,9685,16153,11767,8891,14307,13087,14014,19811,632,10858,12844,14504,4129,19458,8797,17255,8906,14554,10506,2778,3821,17097,18214,4508,5129,2103,780,5412,11949,8458,15061,9041,16325,19465,7876,15110,11363,12997,1300,18420,16050,14553,13704,4110,11644,1842,8155,1283,10796,19260,927,5078,10266,14000,18982,14762,17002,16603,15810,11766,10776,1059,13769,1358,19749,16454,2993,4034,10113,4219,14928,13568,16720,18983,1089,3913,14149,9156,7768,2063,15965,10982,2984,15240,12828,6708,15377,13182,3778,8114,13008,1154,19850,490,13241,12668,13962,16423,4744,16464,12072,9160,1090,2950,10490,11507,13262,14799,11706,11876,1460,8531,10533,13400,6052,195,10181,6139,8083,3432,19383,12513,5419,11911,12464,18005,3486,14151,6023,12260,843,7801,11377,13316,1515,2362,12914,6130,14068,287,16858,15892,3953,18406,19950,13042,19533,12932,11412,19494,2305,8860,15675,8390,191,11290,3424,5292,6910,18149,14713,19081,11040,2027,11622,13579,19282,6042,19015,10944,9586,9679,14432,14310,5341,6037,18960,19077,16464,9631,1902,14081,8889,8285,11570,513,17990,4081,9239,8034,6771,6493,127,7104,10162,6869,16372,5990,3507,4813,5995,16291,2845,10716,8940,9796,17916,18182,9408,15474,183,14146,2559,7291,11033,11187,7460,9932,14750,913,15724,16827,11301,15713,18713,5565,11638,5327,18227,6838,10497,3850,16072,5209,12212,18379,7420,6754,13999,19766,19750,2159,9335,7952,18413,3109,834,18144,15384,7925,4778,13994,5755,747,4378,596,18449,12754,8046,4451,9966,13237,13305,11168,17948,6485,17336,8187,17439,12616,1396,5283,14042,2283,4283,16380,3714,7283,17034,1004,10568,18291,19743,13272,3841,11697,17318,18832,10504,1947,6809,15388,16860,7377,18758,2787,4313,14795,13392,6771,19744,17325,7858,8198,13999,14574,1803,258,17139,1457,19165,18340,12426,7910,19857,4515,1292,10692,7941,10815,8440,4196,13018,2912,11568,2908,16532,12312,17015,19454,9475,15584,15229,421,1820,18669,12868,5812,6233,1448,243,8226,5117,5387,18442,4852,18964,10216,18441,17154,16275,3169,2586,6520,5460,11612,987,15598,8200,8907,12942,13351,7772,19353,8512,17353,15487,19209,17224,12151,10872,2970,342,3715,16661,5686,870,7655,19115,18440,17521,9518,10892,19473,65,7586,11132,14535,13950,12664,11483,16175,2288,10288,4822,9188,11500,13860,9001,15787,7643,3975,498,19384,3334,12759,721,4490,6973,17497,11011,1524,10342,19859,4200,8591,15400,6630,3952,10155,2431,11956,15363,15163,12905,15709,3541,14565,9299,15091,17367,4686,1447,18518,6177,13940,3065,9632,7873,3142,7642,133,13321,8811,5321,5778,817,11477,4085,14104,13501,10527,17724,1320,4911,18110,5122,6116,2,17376,18581,9194,18203,16877,19046,3680,11723,13198,10614,15536,17803,13473,6512,12047,1356,17950,18885,17970,7689,11202,2245,6874,7115,8616,1824,11734,10049,1056,10873,6122,13408,10397,16627,656,5733,1874,10455,6703,14299,10089,1935,7913,13156,7562,6448,16131,19947,6018,13921,5045,79,18121,812,17008,13910,8199,3300,4393,7702,11571,18030,14503,837,8630,11922,9328,2299,6427,18997,11168,13792,16691,5023,6350,10669,1384,7532,11062,15035,10861,3295,1155,18102,16133,9405,14776,16699,6669,12240,3311,5469,10049,1370,11718,2844,8333,8068,9914,8600,19010,339,160,7742,11379,6628,14229,15518,19646,14436,5501,19460,5856,6828,14624,16279,1954,15480,10509,3274,1102,14296,9457,10078,13687,6515,15707,15971,17528,12216,4607,14604,2483,17471,7516,16429,7791,14518,16970,16344,16494,11980,3074,16487,6893,3595,10541,8972,7559,3474,4402,3736,4538,2516,5286,4973,12888,14357,10829,252,18955,8851,13229,6093,16542,7773,2410,5549,9774,10991,3584,17195,9799,18826,8614,565,7625,19187,207,4025,17477,15952,3221,12601,1311,10371,15439,3392,9472,1445,1713,10437,8739,19168,2536,2439,16309,17587,8269,9787,11415,16721,4377,2964,18487,5374,2951,16749,5903,5389,16391,6643,14347,7964,8228,7903,15571,17605,13023,746,421,12206,3263,334,19079,4699,3706,11332,18915,3495,16417,12265,3920,15503,2261,14324,6869,14423,13280,15097,19766,19138,11599,316,4721,11195,4720,12965,11284,13345,7893,8103,551,10312,2739,9975,7711,6184,9322,177,14187,5731,4243,111,13157,10358,12872,12023,14945,12569,1070,15638,465,18150,1437,15478,14352,4750,18156,952,13309,18414,18762,16389,2800,15681,19312,7997,11693,14850,18967,14392,7659,15719,13162,9296,7610,13762,9548,13080,17893,5175,5750,1607,9723,13045,10034,13217,6805,8889,2918,9372,6601,7767,10495,2786,14173,18594,17111,17806,15986,18451,14426,9382,13568,9055,13258,6856,3842,8164,13268,5234,9023,12291,18705,8434,11609,6825,2958,18394,5534,15458,12593,1728,3015,17599,2482,10394,10019,5950,14090,11190,6981,11144,12905,8565,10633,8316,10399,11484,19398,6331,4556,11455,10744,12199,3638,18560,19112,13638,7018,12878,5727,7837,12961,10028,8307,6733,2912,19056,3406,5129,2812,3965,13431,5222,2246,6457,1010,1474,7939,2961,6672,18414,4254,12623,15099,16337,13786,5242,18239,7470,14229,11347,825,12630,8076,15633,12645,10091,2890,4718,7989,14106,17780,16489,13659,8066,15187,16487,12055,13557,6896,6629,1562,15487,17183,3110,15497,2394,8500,3215,8256,12051,2753,3069,9934,18288,14318,3708,2596,6512,2542,1364,2351,10297,7722,10243,90,16941,18453,15980,2519,13659,14004,7399,18946,6346,9375,16587,12858,1335,16519,12949,11342,15497,642,1111,780,17475,14682,18947,10195,1253,17410,13722,426,8729,2171,17619,16153,2872,8112,94,19620,9920,12197,17095,13819,10553,19554,6123,6972,2814,12,17301,6011,5020,10417,13919,6057,18606,10186,1553,13771,11569,14422,11559,136,5205,932,9830,15898,1676,13800,4518,7925,3862,16914,14570,9221,15314,17151,2914,14666,3752,1547,19,8396,13548,8226,18797,10589,9674,5225,7228,4555,19761,17130,9383,5177,14914,9853,7199,9290,12665,4808,12410,3328,7789,1827,1982,1681,4822,3255,15000,12750,19799,18495,858,3585,7617,4081,2589,14103,5480,12595,12035,4349,187,13071,1693,7741,12194,3711,14417,3420,12791,556,16781,17574,547,1191,8864,4516,15431,13973,5421,13834,18250,10985,5719,18249,14241,16552,17054,17942,5140,10779,14449,10637,19679,14832,3079,2763,6709,19733,14061,11749,412,14066,6708,14751,19594,19288,17240,11435,15328,6904,19473,14315,1191,18914,14019,4692,18853,12012,2174,12812,7707,13059,12971,18094,12912,14842,18995,9109,17136,8044,5237,13745,8062,17901,3968,1105,7685,6501,17404,7026,5074,6229,8384,16842,1093,15864,9703,13929,11590,1376,4509,17173,5243,19776,1403,11218,11683,7472,6844,16266,9477,16718,3247,4408,3798,14861,6552,17130,12350,17878,13371,10838,5716,11734,19318,12188,9951,16507,12211,10680,8252,1859,11650,1875,4504,14469,13438,19081,14350,14125,9862,9149,16492,12176,16860,1024,17617,18078,14855,17893,281,3358,808,6053,17418,5260,10797,18599,16433,5283,6843,4466,10118,10641,7348,15499,1557,17529,12482,5376,5230,13132,6321,11081,10110,6568,12321,19112,15920,11666,13079,921,18983,16213,1304,19657,4913,6335,1477,15491,214,19778,13404,14935,9919,12016,19074,18281,1084,1658,14967,8385,2944,5370,12965,13850,5235,8092,14933,10222,10842,4363,8747,8238,1115,7158,17083,19119,17221,14008,19000,13898,17038,4283,19781,7203,14162,18826,10030,18751,8719,16919,4439,16695,1890,15611,2151,17710,12410,1071,16744,9617,11903,18485,6249,1126,4315,8822,1468,2310,10292,9132,2188,5590,16915,17460,6340,5289,13928,473,9391,14103,3320,1102,5186,3409,17267,7484,3818,491,7763,1270,1483,5447,19650,6088,9585,15953,17934,1362,13797,16192,17421,15978,17555,1455,6214,1186,1321,18028,3116,3197,4359,16506,18216,8451,17710,14329,10609,8308,17850,2852,13863,1377,7650,9853,5932,19767,17501,2663,17249,595,2461,19159,14503,3557,10792,2836,19416,9026,13886,4102,15988,17647,9226,6101,230,7903,2247,3857,19499,10562,4292,5681,16540,718,17415,11269,2194],
        output:true },
];

// Comparing scalar output
console.log(inputs.map(x => canJump(x.nums) == x.output));