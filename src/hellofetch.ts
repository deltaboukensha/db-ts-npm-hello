import fetch from "node-fetch";

const runAsync = async () => {
  const response = await fetch("https://www.google.com/", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "x-client-data":
        "CI62yQEIo7bJAQipncoBCOXZygEI6vLLAQjv8ssBCJD0ywEInvnLAQjmhMwBCLaFzAEYranKARiMnssB",
      cookie:
        "CONSENT=YES+srp.gws-20210915-0-RC3.sv+FX+594; OTZ=6259288_52_52_123900_48_436380; HSID=ACBFVAaVnT4CGVSp0; SSID=AdWzjV-axmpv3aRv7; APISID=oOSCe6dBAO1M4ZBn/An5ZQkmfHjuYRVd0x; SAPISID=lF5Z80HPCWp0d7vb/AUGX1slRsOW6kIXYS; __Secure-1PAPISID=lF5Z80HPCWp0d7vb/AUGX1slRsOW6kIXYS; __Secure-3PAPISID=lF5Z80HPCWp0d7vb/AUGX1slRsOW6kIXYS; OGPC=19022519-1:; SEARCH_SAMESITE=CgQInpQB; SID=EwgzQGhbkOyuV-hKC-3_8eHLzRuOJsbeKaHQFUJ0Bx74DA4O9H_92_tSduO5S8zkKFC5Kw.; __Secure-1PSID=EwgzQGhbkOyuV-hKC-3_8eHLzRuOJsbeKaHQFUJ0Bx74DA4OEZl7x2yQgEU6yeycTs1onQ.; __Secure-3PSID=EwgzQGhbkOyuV-hKC-3_8eHLzRuOJsbeKaHQFUJ0Bx74DA4OEgrpNq0DFmQWYL-RR4DBjQ.; 1P_JAR=2021-12-15-11; NID=511=TaY5yrJqJKpKJ9KLp5A_eKgXn4N1f7U4pvlZltfzlvZoxcbIdSWeS_xTN_V1iNNbptKEHYObONd1o-KxMP2R6hXsnVcre2d7Bm-JCTYJbCl94s72cEG1jh5NaF4D3seDpp0Ffd3VEyjiZsj_YzmvLElK_jj_zFdLEc4zFsOaz23GntPy-GB55Z3c3xhdVCzFZ9RZ7ddo-1sfsZJ_tMmPx7-5_nU7sxj2bPt4-iMu0dYB2HBLIsZ8MqtwB20sQgq-DwV6A22G57_V6EC3uYWdCIvEoT15oRp55BB4v8o6r0c-1FrZCXc-vwdIIzXg2HwMs4RhqFT0_iVBRrodFpXP1E9tFm9YiM6Nnv7QCSOo6Aqze9CeAuH-Ow_f8w2i0FvWdjJafTMkbfyZW7SkHma2l1LLr6u2LapkW_bvTGdHmXc10CgqYeRbsaZI; DV=k-lvWvcx9BFNANEH2apbUwZx7xzc29dIVOFZOLg6rQEAAJAWrwTWdqIhLQEAALy2H6usCMoVVQAAAA; UULE=a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNjM5NTY2MTY5MTk4MDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDU5MzExNTcxMQogIGxvbmdpdHVkZV9lNzogMTgwMjMzNTQwCn0KcmFkaXVzOiAxMzQwMy43OApwcm92ZW5hbmNlOiA2Cg==; SIDCC=AJi4QfFvDc73mWjoeNGWDqj4mX9oPlKchTjNEuOtK9ENTOVSqym-9fgye7Np6Yv0MtXlY3QVYqg; __Secure-3PSIDCC=AJi4QfFqpr0HJLaGG4hB-i_Zq-HH4OoQ91yvEkjQqZljDeHU7H85unh2KOgJI04P5gtu-w28gA2a",
    },
    method: "GET",
  });

  console.log(await response.text());
};

runAsync();
