(function () {
  return {
    lineSymbols: {
      'truckHistory': {
        'lineColor': '#ff0000',
        'lineWidth': 3,
        'lineJoin': 'round', // miter, round, bevel
        'lineCap': 'round', // butt, round, square
        'lineDasharray': [10, 5, 5], // null
        'lineOpacity ': 1
      }
    },
    plotSymbols: {
      police: {
        markerFile: '../static/assets/symbols/plot/PlottingPoliceman.png',
        markerWidth: 32,
        markerHeight: 38,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      doctor: {
        markerFile: '../static/assets/symbols/plot/PlottingDoctor.png',
        markerWidth: 32,
        markerHeight: 38,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      fireman: {
        markerFile: '../static/assets/symbols/plot/PlottingFireman.png',
        markerWidth: 32,
        markerHeight: 38,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      ambulance: {
        markerFile: '../static/assets/symbols/plot/PlottingAmbulance.png',
        markerWidth: 32,
        markerHeight: 38,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      truck: {
        markerFile: '../static/assets/symbols/plot/PlottingTruck.png',
        markerWidth: 32,
        markerHeight: 38,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      bus: {
        markerFile: '../static/assets/symbols/plot/PlottingBus.png',
        markerWidth: 32,
        markerHeight: 38,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      }
    },
    animateMarkerSymbols: {
      // AnimateMarkerLayer not support markerFile use url
      eventWarnUnRead: {
        markerFile: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAU0UlEQVRoQ817W4wk13ne9//nnLp0V3fPZXf2phWX5MYyKNsPspIgbwLyEMRJECXBCApp2SSVLI0ECWA/GjBAIEAQwEAeAjgAF0FE2JadaA04F0FG3vzgwEASO7FjSyazvC9ndjk7M33vqjrn/L9xanYc7Wqk5XK15BZQaAy6p7u++v77/xXhh3D8m3/2N/PGnxptqpwqgXPOy2YhWhlFpYYrT1S2ICfM5qSfY4m+VF0Zlbknnrbg2ZJpvorYD/A7e/N4iL29+uXf/d3wsJdLH+ULtre3zV8Dsk+tIxutQt7A9heZWbMwG07iKSaMrFAPoJ4w+grKRdUKEZ/0e0QUjGpjoEtVzJWw8KrLAB5TiHtMethYmtdSL4Fx/a3FaX/t2jUBoA96/R8J8L/e3i4Ho2xzILQ5iuGUgDYjY90ohk6lBKiIRHkkyhjIWNUSYFjxPb+nqhoJGiwHBbwTqa1qo4oWSkso5mJwuGJze2n0g9b7m4cLTH4faK9duxYfFWDa3t7mn+r3Xda2ZVFg3UY6R5CzOWQLoE0BRkzUc1GsElxr2AnIsagxqsapJnrvApwoogSYWRtmUaZoJAYWeKvSEtBGokZB08C05xm3QsCOEbPXuGZy6OrF+mHRfOkBgH8oho9N+HSer+WFnK+Cni+DnIfilBhUAPqq6BFRDiBLgD0hA8g6VTYKJlW+l+EEuENMJFCSQCTCiIB6F9AQpFXiFsCKSGcRNANhEkB7S4P3JqK7bbb44KWr/3X5YZn+gYAVoKtXrth1HPZca9YzwhkQPZEJztsoZ0gxiowCQE6iORGyZMZIAYqQEWCdgAmafJeFwBFE6XsZUIIqKxJuIahE6kBHELyN2pCiFYIHUWNUVgSsBFRHpQPP9G5gvSHG3jAr2T9bVfPPX73q7wf8BwJ+5coVt2zb/gVenBkFfsoCF4j0NCk2VHkIpj4gBVQLVmQKZEKcgLrEdPJdKAwBHAkmGDINGxOBFK7ViUYXJTho8l9Jp09sE3lWbZH8mJBMu2aRFSvqdCp0IaCxGN6rHXYi87tY4s2//Ru/cfiRAL8M8DPb2zZYO+xx2MqVLuZETxvoOWWMFDRQoh6plgQtSJGDukici6EMiswoHCXAOAKsiWGBCZGMJvM2UCKIIfJEnRlLMm0hikoIHVh0gBPTDWkHeMWCjm0QLz1j0hizF5jfCSLfYU8792P6RIa/sb2dhXU7XK9xftD4ywy9qMynA2gdJqUZ9JEAA6WJWgJaCFMuxHnLKAjIrKhlUUuU/BdsYqRsJZRPPHEQSrepLSzqnpWQGQGoM21JTBMFJTQJMKk2BDSRKLG7siIroyl96VKYF55oGgzfSqDF6Fv3Y/pewF00/qJzw4HT82UMl6ogP8KKc6IYiKEqMPWUqQelvgFKkqM0JIQcgpyC5hzFWVGTAhURMYuQjQq3CtQbe5ggiAWj6Rksew7BmeTWyaQ71oUpRsc+mOS/3CijEVBDqisruiTVJRJgwhLM80g0bg3f8gZvNyzf3mPZAd5cvnT1D77Hp+8CfByNn+ybM/0ozzjVp1zQc0Z0g4BKmfreUF+JOpYJ1AOhBNCZdbYKrjpoTb4KpvPEVBmQdlGKVZGM1XhB+juFMbGEYBhdDE+QU8gGEHPStnJS90xsc+MDU9uZs2oy66UoViAsCVhAdY5UnTFNvOPdhcEbc8NvL9C++9LVa5N7ffouwF97/vnChrC+4cKni6g/bqM+AcGGhQxZ0RegijYFKupD0WfRHouWHBOrsPkymMF+zfkqfqh09/0CTMwIbWXRllbqzMSQsRfLDQzqDixoSehYXhDRTEDzyDz3hvZbxvs18Vtt9N+5UePmvQXKXRf29WefXXc9PNUXfbqM8WkWnCPFEKqDxDAonVyRat8E6WdeinzlC9uItStl00ZyrYBT2HmI45h9YVJJRUlppFnLQlumX0AN6NKIzpVoIURzYZpHUCpJJwI6jEzvTtj86YHDO7NJu/8L166tji+nu7BjU35i4M6Vop91wNNW4gUonSLVDigpOtDptEH6zktZrHxeLIOzy2hMnYA+BMof8K8+Z63XM2l6JnjHrRiqCZgLYSFs5oFpDkIqSmZQzAJod+HM6zNjr9eR33rh1VfHdwE+ro23PJ4YxvBjIFxS0AYIa5wAKwaADlhR2ShVlsAu26JYRWsXkU0jKXt2vvkoDmVocIzQM9JUTtqC29bxQgzfYRizSJgDNDWKqQK3587stpZed8H/4d969drNuwB/48r2SEJ+qRfj5UGQHyXCBTE8JJEhAxWnCA0MTZSqaGOvWPni42D23psXsxTMLOq+C4u+rX1mFkSYK2MWwTOBzhJgIR03hg+EzHWv+j/f64d39r591F52Jv3fvvL3toTzH2foj1jFpwGcIcKQRYc2HrEbDQ9dG6vBrCnLZMYfA7P3Ak5Mp8heV04mm0VY9Wx9ZMo0U9VZajIIHcPTaDCJxO/Nyfzpbcdverfa+af/9tqcUvN+aVydN2z/su0A6xaATYKOjGBgRIcADaKhYb4K/dFhnZUzbx+lz97PLZrC6GyzkFVl28RyNMmHaaqEqajOiDAFaBKYbi4NvbGE/j8f6td/9ld/e59++ee+svUp7y/0hf6KE73sRNdZdY0JQwINSXXY+TDRsFiEYv3Wyhbzlh+lz94PcIrePmOsKhtmm0W96tmlEmbCNI2gSeqoSHTCpLda4htC8fVozP/5u//uN2/Rv3/puWcGAed6UT5ngUtWdMgqIyClI4yIeMhBBlkbq3Iesh9Gnr0foA/7fl3ZuH+2DMuBWwlxx3BkTFUxYWAM1duB6INI/FrT4n/8352d9+k3X3rur5dtPNUT/YwVXFCiNYWOErsgHUXQWrmM1frtuujNWvfDyLMfFtD9Plf3neyfS6bt6iOTpimSWUOnUE05edxac+iJXl8x/96fTer36Lde/IdfyqBrRcQlo3o2AU7MMjBU6JoQrfVmvr+1s8x6M3/iEO5+F/ao3m/L5Mu5LirXtpmZR8tT0BFYKCZKNGmNmXqm6wvl39+NdIO++fyXX+Tkq8BFELagmmZTI6sYsupIgVFv5nubOytbLvyJQ7hHBeh+3yuGNGSMeWXD+HRvtezbuQJjho6dyCEpTZJPe8PvjJn++LbSLfqdn/3yP1fiSgjnCDidApZVHTnRFLBGie1y7ovN3ZqLxwzw8Q1ZDFzYO99rZ8MsFSJjUoytyKFVPVRgIkQ39olemzp7m7714rO/KECfFadIdMNBR1YwgiY/TieG5TwU67tLKudHeftxO1aVi7fP9dr5MOuGAqmmJsWhER0n0ADenxhzfZ7xAf3nrz73L1hROpF1Fl136AqODqgqRilw9WY+37i5QvGYAq4r10XrxSBbBsY0EE1Sj0zAYSHxgER3V868VRse07Wv/vS/ykSKQnUti5KAjhgp99IQSOmJhuVjDnjVd3JwroyrLj1h4okmK8sTVRxUQfYN9GbDdKMlntJ//Mc/88tZjHkVZZSJjNIkUggpHY1MlGHehEFvFvLBQYN89YjaoYf0keP0VA/cKvmsZ57MrZkIcFiFeDtTveXBu4FpdiJgT7S+sryZL8Nw64NlOZh5Z1uBiY+oHXqEgAde9jONH3imXU80PxFww7SxsOZUb+6HF3bmxXDa2k+ylLzf/fiBDPt44EQ+CISb0fLJgD3T+tKaU+XKD8/uLYpq6t0n2Sw8DOCBD/tWdO9EwPbYhxlrLZsN14bR+rTp9eetK6YBtnl8TfrgfBmXla1xkg/HZNK8c5cP90McpqAFQorMXQ2dWsPMh0E59/lwr0GxfDyDVhelz5dxVblVKilbQylopb74oIrxdibYXbK+F6yd0LWvPvcvHajIQ1jPuho6VVh3aunULUFTWioe5zx8Jy2F5dAlSqaBedIwTYjooAhhnxU7teW3uzz8zRef/SXt5st6ykSslzGNdY7y71G11eXhVGlxuXg8K62jNrHnZ0O3bJmnqbxkwqFROXRRDwW0Ozd4q3HmkH7nhS//fFdLg86y6qaNumYhI07j2VSEKIbFzJebu6vHrpY+HucuKxfGW2Uz67ulJ07D97GFdKWlgY498c7c0PWZoQP6Ly8++1ULHdgon4LSlmfaYNBaCmDmTpnZn/ty/THslo4H9osq85NRvqoLM2PFmFXTOQHRRFXSPvnGB8Z8Z8/gNv3Wiz/9pZ6EURHkEojP1oY2CLxmVZI/j1gw6i18b21vlZVzb5IwoVt7PQaHL1gXGxmWw6ydl3bujZk5lbERjNO4R4CJQieN6tu3rfnfN8A36Vf/0Vd+ahDDRhXjZad0LiqtKdGISNeSSacmomhiNZi2ZTlvXTYPMO3jkZ7qntHJmVKWA1cHyzMhmrLoJE0tfQJMNFbCIZheW0T9738S+D165YWv/NUNyOlRjJ91KhdT/5vSUpp0pBSVANsQB2UT+/2Zz3r7DblaPtE28dh3U5fUjWsru0rjnQSUFJPEbgBPPeNQGHuk/B2L8Ht/42v/4T36lRe+fPFMwPkh8HkmfYoTw9A1EKWc3M2mu3GtyqCc+mLtVm3y1IR9gsex79Z9G1ZVVjc5LyPxJHICnUY8SClpIqS3G+IdNea1psEf/oNf//Vdenl7u/qJks/3mD5vBH/JKE4rIa1H70RpTeOfAVSH5TKUg9tN58s2rT3le2VIH8d96Hx3M9e6cq13vAyW035pKqCpMKacppaqqSferZnfaFivI9Sv//00l375C1+wn3nq7FYB82OFyOVC5CKlYbxiqJRaRe5SkxWpnJd+UceyWHhXHLbsmk/GtJNqYHymCHXlamEslGl2ZNI0DYRZMm3bjXbwzoToj8ZMb1hvbv3Mr/3aovPFrz3/xbXM9S4Noj7dC/oZp3KeBCMlDBPgNIx3IpVRrVjQz5c+7x+2NlsEvhO1PxafTgP4kBlNA/jpZt40PbPq9sOKebdiScP4bl+sYyE6UOCNCfEfvI/s7V6WLV66etXfAfyFAji9NhL75JD0c0b0SRePJpYgDNKqNIHVO3ti18ayXMYiX3h7J2p/LIDbwspkM5NmkDU+o7RiWQAJLCVW54AeASa97dm83xJfr2P7x4fF+u6Vq1dTmXi0uD7eDz+d5xdyEz9no17OJW4Z1XUQVXpnN5xWLgSpTNS0H+65WrLEsl1G7gb08nCL8BOWZ50sIjHbqfV6NsxOFb4pzYo0yR06XeacoLP0im6hptNoeGdlzfUF0xt+iTef+y450zEznZhlu8KGJXu5DHi6F+JlB5xRlW4/TIyKBJUR6dOR/KEPQckRWbaMtlvB1A8ndbgX8HE0bo6kD8Fnpgk5r5R5lVQAJLpAUudB0zJ8LqTJj8dC+vbKmj/aD+6dYO3hC6++mtrG7rjLFF+58nd6Wdvf2iR6omrlswa4SNC0FE8dVOfDpNLpO4S5H4lKISqzOqadky3qyEmH06l2PoL04bulDpEJsTDS9o02PRfqzLTBUrrwBQstk26LksZDuyA1Byf/xYEw7QaiNxfQP7l+P43HN7a3zeF6nW81vXMO9FlL9FQuetZG2bBR+wStOo0WqC+UtFooI1FBEYVrY5IrZUmIloAP9hvKHlDc8heMFkab3Eq0HGDJR0OtN9So4U6fRUpLFl2yyIJVUsBKopZZavJrg9c86K1JNO//J++n98qMTww2v/38F9fgepdslCfzQE9mImezmEa3OlBO5kx9kPaIUAq4EEWphKTKy0lhszraar82eS2UBKWdfOnO6/f46bGpkaYVqDaV0zZJGzITxNyRIIJSbVcLaMXAIum0KOm1RJdWZQ6lQ295z7N5d57bP5vZ+L49DNMvXbuW1Hx3HScCfuXKT7qt9mKfqH/eID6TCz2RBdkyilSF9YnQi5QY505nqcSFkCZBeGaS3DBqxkEzjmKNgFiPxKXHQfIv/ImOdFnQTugtYim2zsRo4SlJEpP0UNEkVV7SW6KTLGGVJEuJ4TsmPRei3RXx63Xh3vaedkNdj7997Vp4GZ1w9f6Ajz/xzWefXUcPT5HopUxw0UTdMiIjJlQR6GlS4inlylRERo+ONJZWgMwbKhRwVsBGlBlq6E5WOP7+oxaEVAkSE+Cks2RKIL1VbZPAVIiaBJoTYGid1HidEg+d/04EfFuStOE+zJ4YtO69G//ryhV3cz6v2l48y8qXi6CfzoOes6nWBsoEOMn7A6EMhgsizTNJgDVrmTMhSgJTk2SIttNLn5C2lDQwtE0CcVDIoEk86knQMRwYrX4X6ASYJR5FZ8LNmujN1mXv3o/ZDwX4+EOvXNke9ZF9umr1YhXlU0b0tIEOhXQA5VIYpTecQzV3qg6qLhh2EeyUNM20kyqe71XEH1kzVIg06aRJEQqVxor6CEQwtZLEpURNTELTlIqgs7QzIpF9Id5Zgd6alnzz+/nsA5n0/wf8kw54qre+wobh7HxOep6hF4zKKatJtEZlIHQCcSOS5MOOGCaAXWCyEWQjw5wUt5JZG1VxgDciIRNNgvDQApHArYHUnJ6BIGr9Uen4QWTskMi7IcqtWXRj5/3i+/nsRwJ8/E/HArZKzemSwrk8IFVjm0kPwpBCNfk0kqw4MwkHYDyR88zGU1LEn/hUizpAconBRI2GKAgQ2vRK1GQaF6Sd0m4egMOGza3a6G5T885e04wf9GGPB6qBj0vQ9X4/38KiiGo3A5mLzLKVpRVrUgxwajZQZlGS9D9JJIxSEtMSCSX9fxLXJpVw96xDes5Fk5bW6tFjAApESQwzt5FpQaJjgPYa6M30rAPEH/jgZm2Wrb61WDzw4zwPBPhe8/iVf7JdOV+er6LfHGocQu0wMq0R0M9Ecyty5zGAJBQnTsr4pKFO0emozNMUw0NMryCVpIxX9T5FY2dnojxTxrTVeDAG3ZpIdnDc9dx7LR/274cCnHrp08+cLqp5yNeywoYlFb5nehoxJJINijLIiPKMNDeSTnJEwipdXkbyVc9olNkH1ZSW2qXSMpKOe4JbA9bp3NtAvGjnWtWrsmyPu54PC/ChfPh+P5JuAE6fLoZlOcqMnMkNrRWsZU+0dEFLp+nRnvSYQypCuurLe2tWntLzSYi1anOgmC+Fbrctbrz89a9P7/ebD/r+nwN0SiRLqA1PVQAAAABJRU5ErkJggg==',
        markerWidth: 60,
        markerHeight: 60,
        markerDx: 0,
        markerDy: 30
      },
      eventWarnRead: {
        markerFile: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOdAAADnQBaySz1gAAAB90RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgOLVo0ngAAAGZSURBVGiB7ZvbsoMgDEU3zvlv7ZfbJ85QJJBwNcB6tpDljqNVMPd9ozUffFiTnDhN61pMC2GuYIoWJ6CacC1JilryxcKtRX1KxbOFe4v65IpnCUtlL1xVj7PkSIuFubLS4nN/L5VmC3NESyVLxuWKH5yDRspyx+Z2XjLh1EAtRXPmSyUdTfhtspw5UzX/tZi0NXb+nDrIhKkzNVrWhaollnJQWIOsRSr9EB79BFWTkAvrtgS8M12LpLYfYU2t7MNtbXbCGuAE8y+sOd0Urls0YY2yqZqnamkOBzDXrYjCOpIJa2xnS6z2NVt6Jcx1X4/rV3M7u4Q8lkt4C8/OFp6dLTw7W3h2jtCb+hmetEIOJ06zXsKjC+jNlP+HYxxAn+VCPaGuX2C39C8a25r91pJqa43SPq7bVC0t+vIA6E6ZqtF3muLroYSHsMZbFDddgEhYU2tLZIFIS2uQrrqoJTXRaPHY/LHLci9Mkw7QU7hUFlhwcelrlw9LxpDcSvcCcS6jVw103QLgsswmD59ltvGEWGKjVow3bcX7AiCf2zCVKry3AAAAAElFTkSuQmCC',
        markerWidth: 60,
        markerHeight: 60,
        markerDx: 0,
        markerDy: 30
      },
      eventWarnReadCore: {
        markerType: 'ellipse',
        markerFill: 'rgb(88, 214, 141)',
        markerFillOpacity: 1,
        markerLineColor: '#34495e',
        markerLineWidth: 2,
        markerLineOpacity: 1,
        markerLineDasharray: [],
        markerWidth: 12,
        markerHeight: 12,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      eventWarnReadCore2: {
        markerFile: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOdAAADnQBaySz1gAAAB90RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgOLVo0ngAAABbSURBVDiN1ZNLDgAQDERbcf8rj50FHRpKmPXLS78KQCKTQm1fCPMMUNFuyBAo5dlSLJFHbLbskTHu/FK81TH+/bM5LxzdmJWWv9Oyt0qLo59SgajXW82HZ7ObArfaIRvAaarvAAAAAElFTkSuQmCC',
        markerWidth: 20,
        markerHeight: 20,
        markerDx: 0,
        markerDy: 10
      },
      eventWarnUnReadCore: {
        markerFile: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA7UlEQVQ4T9WUvxLBQBDGvz0dBUFHw6SXNxBPhDeJNzpPIPoMTZSEgs6tuTH+5i7HjEKu3W9/t9/uzhJ+/OjHPJQYuPP6daqJQAHy0RY1EczS26yXtlZZLW87/gKEIJ/Ie8EqtEFzQF0ZV4U0wx54wefABM0Bs64/fLVpNseAbKfJ6D2aA267Pn+6SgIIvTSZP+tLCeyPARE5bTNiOqmwma0OhZazTm+gSEiAGoVQRtTaJFPnULTgCq3EdqCatNLVzBS3LraGnqkSERDeExn6E2mq7KZxHge9lzcxH1X83rOPLDsHUiBwVvgt/P+BFyrNWBXV4J05AAAAAElFTkSuQmCC',
        markerWidth: 20,
        markerHeight: 20,
        markerDx: 0,
        markerDy: 10
      },
      eventWarnLevel1: {
        markerType: 'ellipse',
        markerFill: '#e60012',
        markerFillOpacity: 1,
        markerLineColor: '#34495e',
        markerLineWidth: 2,
        markerLineOpacity: 1,
        markerLineDasharray: [],
        markerWidth: 16,
        markerHeight: 16,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      eventWarnLevel2: {
        markerType: 'ellipse',
        markerFill: '#ff9e01',
        markerFillOpacity: 1,
        markerLineColor: '#34495e',
        markerLineWidth: 2,
        markerLineOpacity: 1,
        markerLineDasharray: [],
        markerWidth: 14,
        markerHeight: 14,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      eventWarnLevel3: {
        markerType: 'ellipse',
        markerFill: '#f3da2d',
        markerFillOpacity: 1,
        markerLineColor: '#34495e',
        markerLineWidth: 2,
        markerLineOpacity: 1,
        markerLineDasharray: [],
        markerWidth: 13,
        markerHeight: 13,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      },
      eventWarnLevel4: {
        markerType: 'ellipse',
        markerFill: '#338fff',
        markerFillOpacity: 1,
        markerLineColor: '#34495e',
        markerLineWidth: 2,
        markerLineOpacity: 1,
        markerLineDasharray: [],
        markerWidth: 12,
        markerHeight: 12,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1
      }
    },
    pictureMarkerSymbols: {
    }
  }
})()
