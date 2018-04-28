# Aqsia

### Development terefinde istifade olunanlar
#### GULP
#### SASS
#### NPM
#### BOWER
#### BEM

## GULP
Development terefinde bütün deyişiklikler **/src** klasörü içerisinde olunur gulp ile compile edilerek **/build** klasörüne atılır.
Back-end developera  sadece **/build** klasörü içerisindekiler lazımdır

Gulp'da görülen işler <br />
-SASS kompile edilir<br />
-autoprefixer ile  prefixler elave olunur <br />
-rigger ile header ile footer kimi bütün seyfede olan layoutları import edirik<br />
-minify ile js dosyasını minify edirik<br />
-minifyCSS ile css dosyalarını minify edirik<br />
-rename ile minify edilen css dosyasının sonuna .min elave ederek adın deyişirik<br />
-concat ile js/main klasörü içinde yazdığımız ferqli .js dosyalarını birleşdirib all.js dosyasına atırıq<br />
-flatten ile font klasöründe her fontu bütün formatlarda ayrı ayrı klasörlere ayırmışam bu font klasöründeki bütün klasör içindeki dosyaların hamısını alıb build içindeki font klasörüne atır<br />
<br />
## SASS
Sass dosyaları **/src** klasörü altındaki **/css** klasörü içerisindedi bütün css deyişiklikleri burda olunacaq 










