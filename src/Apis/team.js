const teamData = [
  {
    name: "Abhishek Tiwari",
    phone: "+91 94049 26625",
    image:
      "https://s3-alpha-sig.figma.com/img/2e0f/3ed4/1d3629ad0159e80f29289902e0ccdb99?Expires=1693785600&Signature=QKkY39SuJLS4vA8GM9SqUGUThjIUtEzGZXctjvjElmxkwfwUMnBgbfEktOuHShPKv8LOXgLo6cIdqc5xGepOsaP70yvhG5K2TxUO6pvs8yLW1Fex97uO8gtrazgGQyglWJk7VPtYRcVflqqjC8q7V0dXWHeJz2XsqY9Iw7bszjnPZi1Z0XxbgEyKfl4vRe2IsU2il64pRwsImTu9a7sEqo4FS9baOIvzMdKhreLI8HMhFtYlRvLISD2c~ZbTKJePoLOEOcNchxPeLvfyNtPV18YHOmoNMWaEId~0TH5gOyUJsqmUY486bHWMPzV3mji1Zm8tSDomJIHq5XNJWvCymg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Ashish Singh",
    phone: "+91 70886 87921",
    image:
      "https://s3-alpha-sig.figma.com/img/5aba/d540/398b8cfdfb731fea5853276f46ee4ba4?Expires=1693785600&Signature=DoA7BC7RnrIj-dAs3DTgBElAFoXW-Tu-bkXORrOs7cT2ARvOoTjbD0AtGK~WmWQJ9-2J~5OjanNqOxdeE4MzUtQSpKaqObbcW3uON0WI-LLgMqR0KMmUYWX9eA2h9qqz68wtcV7vxPF8N7vyceeMlDak-fHjmwbhVta4md0zQUa4Q-O2lLNoOkl~FUnCavGM28baw5z2u8ctnrkEq-9sqlojTgJLdXGV3stKV~Lngxg0gWP1heva6Sd~JtyWNCoQxlpEZJSRRPJR~t9LoSluqKnDYJdZh-7uNKB6n77zBocm0hBtTgxWsrY0rT4rFWsL6QHePKqWDtz2~fiiXHYSPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Ayush Agarwal",
    phone: "+91 87557 45676",
    image:
      "https://s3-alpha-sig.figma.com/img/9557/4082/491443d2d1e372fb53622b1f0cabb0f8?Expires=1693785600&Signature=BSeTXIkAGbLXnsU~mrLQ8BQfa2-nRCtZ4SaC0r2PVFsxplk59EdXjZjv-qIFNefIPXQy~WPTkks4zTDECTcVLq7Bv1TvhDtYNYX7zylytP94MelRiGqIBw79JPKhKX9X4l6BMiledeNDDno~bcaYQCOYS~Q0JDGuAsTx17FoNjR6zPNLTYARGRdAx3yE0-wMaPl0cjYUs8OFZb5bWyWUG2NP7SZDLddhhOyjbFxlvqBgIak6MIyYnBg~NzodMEmEK6SIEE-MZyFQsv-Fj25mof9oAQciWcnCTu0a5jU7QxwISxMXaH7uQz-nNbd3Xeg8N4cgS1MXi8msjnBfGleXwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Damini Kalthiya",
    phone: "+91 6260 399 776",
    image:
      "https://s3-alpha-sig.figma.com/img/20c4/f997/a7c18cbd5eda51c3a7b8d6387b64b205?Expires=1693785600&Signature=FH0OQA9UYqgIwG5OTc3roK6Aul04cS-rc9cU66aHrB2XxYH11uMJ2s~sG6irce0i3AapJ4eb2DD1Jf-Q7zXUwBTGz68lsoyxRVq5xKxJFXXUS0iVgnIvIiZPmwriWHfnJTQH6M4DvqdpiUVumcb3FNx8oH1YUft7oTphJStk1U8lmfEim1KDgU9Xb8-C0EBK1AV-sUM2t8uZmoPVSEXDdfY5fWSVxH2f~wnb~4mmw9IkdZZZt1rAlPCxpOcvrTpIN9ZotlEV-PPuArgT0yFYz~O8iGue-gWy0-dnWTtlR2B4PWWXb3-XBJi2KqYaiOfmJx7Hcn65pLO~aF0yucT4ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Mimansa Singh",
    phone: "+91 70040 46836",
    image:
      "https://s3-alpha-sig.figma.com/img/8ee6/b073/e7eebe3600629d7ee828a59e612c15b7?Expires=1693785600&Signature=CBhgZIMpob2kRzPgYoryGdX8lUCIpWD5aaxDVBoXAZG7bVkT7SbcL8qcAdncMuSgUKDTLihzsolvTixO7VC7ulO16FZNj~RzDtNKP~ecugz4bjkGO4kTVNRl9g5Lkp8dKnuBhxEoLqj2MW6RyIPuTHpytWBBNEyFfrBSnmwSyz6yEvyTxjwTKAL3M8fk7BBg4vCkViyeYwnm-6eJsa-zBBZ6she8Aq3VH3gKnceNoEgcpD0EFrpfgZGwBBjqRHOrps9BVmJhzI0PwwgMsyDtIbhWUxdB6Om~LNMYkSr1e2Bl-9gcAh-gGDFU5B8Z0F1oRCz3jVYJRSTW8m6-BERxKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Priyam Bansal",
    phone: "+91 95885 26725",
    image:
      "https://s3-alpha-sig.figma.com/img/d4ca/3bcd/e66a1eee6fa67dcd2c29cb2a794b7c03?Expires=1693785600&Signature=L6iT-jSqKtzDaXx~cYTvpibfX2XQ-BYB7GMiiFXgqyn1lFB4dxqVS2Ax8KZwajQj6uNW2ZO3VaOCpD1lGkpOj-VHodBB0KU6ceYrlr4BzdPyRwIsOZ7BvAjYCBsBVlMwZ7SuwZnlGVAyZftH46RcMXqpvHlWx1i9J0hIeC4HcOoOhyoaQwrcanXs~gw-d0Si3AGmJz0B3SGOxIPdhTWfFGCT8QNe8WHbow2raMBocUY6N~wP02UgCHS~k6Rexfj2Zq-6744P-3QuupEtYBuGW9wSA6oIUUwAgtKLin2Y13QXssyOFXDOJnGnMvcFiLBqvm0ITvXjSvCJYvfmfEw7Hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Rishi Raj",
    phone: "+91 93344 66767",
    image:
      "https://s3-alpha-sig.figma.com/img/44a8/f255/676f074d6bbb5a342729e264b77710c3?Expires=1693785600&Signature=NkYktN4Sa8vlrWrnB-Umxs~j-3BhzKodDoxLxBUK01EYERWIl1XRu7YkQg5jXrnTB9VwHlA0Hb9fgUad9Vq5DkeSFf0rQn4GiZNgBOYzOcp7Gs0rWSMVpXC33qU6l3iTRyHO74F~F~SUoA~t70TKNcSEtFHyM0QISVQNdnfVKlA20DuPPhbG2nh4P~srJa-DhembySgh9N5h8OH7HJS0gAkiDZR5gej2Pbg6M3sN5ZQktlIXem3kNAJstb68ZYWWNWRmFOVm8EOqHKVqa3SS0az3peSRpHXphMEkD~kG6Jv6mHq7YQUelpxOa3o6BPOK6T8EloWwU9K430o4I1n9MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Saket Vardhan",
    phone: "+91 6205 819 707",
    image:
      "https://s3-alpha-sig.figma.com/img/8fda/9c49/466ff408a8426c8c87335d0332296150?Expires=1693785600&Signature=K0k4lI7R7rb0Y02p-KRRlbgrsXtj6ch1vD~Lact439Z9W~mMOAQPhP10PWb7ybiQTKVf1tEDtPrM~QdFyyaM0o-paEfizQD6bsfdbv5c4-GlCiuYgi7zrtdhNY2YEaIb7MvIxHxKg-fxUsUEl4z9uKp9I~JpgnODl~GqNeTljlJN8k7Vfu-3E0iWthtzyG9MCDxK9rGH0-eqqodUQ5FMIw-mThPlrOYlBibsc0o~9PUfdYNvoxSx10HelKKlmgB5SOHey9jAGk7POV2MeqL0KPQ0xyimNqKpc---igzZK6fNz-I4PTDEM6sjwIn-rKVdyCgAiu39evOPgGCWYFfmVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Sauhard Nautiyal",
    phone: "+91 6283 285 309",
    image:
      "https://s3-alpha-sig.figma.com/img/c299/d0b8/350c535b29b26913aca80b0af408fb36?Expires=1693785600&Signature=AdE379QYnxI9elkh~3ammIomZhGP4EVu8MQkpe4zvzMwvVh6sOC47SkIZwpHs-ZIuLktj3uHOA0t9fjFnAPlieT~WWjqfI6SS9g8fiyV1SzMNqChT54wqJI199rzjqKAXQck-QpBjrQKn0uqYdruzV0bicf2Heg6IvlfZ~WfhS17pLLXVM6NsRtkl8CKV7MTTOpKJTJb~6USTTTuFsGkpsKhTi4a4ZvAo5HiB5pmXYQjek~3CvZPcZk~BhtpV-dTMb2uWe6PqAcX8u~bDNJNILl647oFywxoSEUqLtZQEG9nlNhWEW8VtdmIKf2TFhytPkdMiuYled~fbZAMTHNQYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Utkarsh Raj",
    phone: "+91 6201 847 073",
    image:
      "https://s3-alpha-sig.figma.com/img/b143/1c29/a42413a790023407bd5a376891f91b40?Expires=1693785600&Signature=TUQUdE6~1svrlvQu3O86AfSVsH6U~AQMsUwmRk4padE51xnIU9Lly2eWLWzUFA2gLg8KZaOcFm~5sC3pSufLaxK2MtNNuZAjgd2d0FVWG6ZCEogDMoyE-UGkCtqp9kxuOvf4m3HOLRwfW1-9sg~oPr30ApZGlunmXYiVvzd8Pmrib5zuC6eGBrcLC8YkaiCFLlji1Ob3bNVgt9Y4OLspEnwl3UBZEAJH0ow~KjAZGTnQ04lX66jZ3aS6DqjbAyjzJURgOOjvBfNNrTCdVsmsnt864yV5KamQFAi8j1OHcVhOQkegNWhv4LmZBu5Plz-jhGTVNwiAQgj9avRPU3xptg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Vaibhav Mandwariya",
    phone: "+91 87692 36513",
    image:
      "https://s3-alpha-sig.figma.com/img/2039/4e3c/c91bceef9b74ea5e8ece7b454700511e?Expires=1693785600&Signature=Ooe~sZGGusBwJ22tbl7cpNWx4fHosBLV1mMEoSPHtAxBLknOqYaymRSS8w0dkpi99RI1HgchyO8Ynbwz16gdlWh7ejcsuSQlvonOmDxUt~HjHYEdn-3iMAMWHzoIQqE8cccxoSiWWAJuxbkd2Re2qxlQvMHrh7vqmF-w2gPJ~JxQ-5K~Qzi7h43HmCKnzmLUIMl7M3MYnTEFSHd6I6Eeqf0wnLzPviCrVviVJ24QY1irWPc~ZNYg9dew58zEmVe9hJVmIb9A8vEgu3ChH2JYrd-n-Kpa8DZFA6lY6Irak6epwFd1XVkKQB0q1wQ72sMesmNVgG1HCHFjmEc1deCS8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Vinayak Pokharna",
    phone: "+91 80001 57872",
    image:
      "https://s3-alpha-sig.figma.com/img/da7a/f261/62cd90d1be0479d10c913fb665853143?Expires=1693785600&Signature=ckTX8pvmBpO9gT7x9ADK8la62dhC6y2IhuUiXyhA6JpQGEEJUctme2FOsRsG1XNbtqC82fC4kX3Yl8xLGFKKTFynvxmIgFhoP6yeJGxMvKze6BfKVXv1oDburV4RlZeEnMbLEX6P-Y9XBUKSLWWwOIlP2cKuv6JjXvq0bxc95mkJ0w2Cz4-qx6FMa~Jei71vWWyc7TaMUllO9gPP6YzQ3702ThpezlrDvoySBmmmxauTJZ6tH9jxBLMb1RiCTZ~idKIAXn9BrISf1jhbynYSwZN4gmHAwXdEeOkTLQTM8xVkHEmK~w-MVNwfs66~xEup0NO3fsx-RcPcczmIJD8XwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default teamData;
