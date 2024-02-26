/* 

Animal (name, color, sound), intro():
    Pet(name, color, sound), intro():
        - Dog (name, color, sound), intro()
            - sound -> doubleSound ()
        - Cat (name, color), intro()
        - Hamster (name. color), intro(), eat()
            - foodAmmount
            - eat (): Mano burnoje siuo metu yra {{fooAmmount}} morku 

    Bird (name, color), intro(), fly(). stopFly():
        - Parrot (name, color), intro(), fly(). stopFly(), repeatSound(), repeatHistory()
            - history
            - repeatSound()
            - repetHistory() isspausdina paskutinius 3 jam pasakytus tekstus

        - Canary (name. color), intro(), fly(). stopFly()
        - Stark (name. color), intro(), fly(). stopFly(), bringBabies()
            - babiesCount
            - bringBabies(): Zmonems i kopustu lauka atnesiau dar viena vaika ({{babiesCount}})

    Fish (name, color), intro(), swim(), stopSwim():
        - Shark (name, color), intro(), swim(), stopSwim(), eatHuman()
            - eatHuman () Kaip noreciau paragauti plaukmenu
        - Goldfish (name, color, wishLimit?), intro(), swim(), stopSwim(), makeWhish()
            - wishLimit (default 3)
            - makeWish ({{myWish}})
                - jeigu liko neispildytu noru: Stai tavo noras: {{myWich}}
                - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu :( {{myWich}}
                - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 
        - Dolphin (name, color), intro(), swim(), stopSwim(), jumpFromWater()
                    - jumpCount
                    - jump

Papildomi reikalvimai:
- naminiai gyvunai {{sound}} 2 kartus
- vandens gyvunai {{sound}} 0 kartu
    - delfinas: {{sound}} kartona 5 kartus
- pauksciai {{sound}} kartoja 3 kartus
*/

