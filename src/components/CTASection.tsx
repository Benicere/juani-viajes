"use client";
import { motion } from "framer-motion";
import { company } from "@/app/constants/constants";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[color:var(--color-primary)]/20 to-[color:var(--color-primary)]/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para tu próximo tatuaje?
            </h2>
            
            <p className="text-lg sm:text-xl text-[color:var(--color-muted)] mb-8 leading-relaxed">
              Nuestros artistas están listos para crear algo único y personalizado para ti. 
              Agenda tu consulta y comencemos a diseñar juntos tu próxima obra de arte.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-12 h-12 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">Consulta sobre tu tatuaje</h4>
                  <p className="text-sm text-[color:var(--color-muted)]">Hablamos de tu idea y la hacemos realidad</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-12 h-12 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">Diseños 100% únicos</h4>
                  <p className="text-sm text-[color:var(--color-muted)]">Cada tatuaje pensado solo para vos</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-12 h-12 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">Higiene garantizada</h4>
                  <p className="text-sm text-[color:var(--color-muted)]">Cumplimos los más altos estándares</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[color:var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.242.489 1.665.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consultar por WhatsApp
              </a>
              
              <a
                href="/galeria"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                Ver galería
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxUPEhAQFRAQDw8QEA8PDw8PEBUQFRIWFhUVFRUYHSggGRonGxUVITIiJSkrLi8uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLysvLi0tLS0rNS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLy0tLS0rNy0tLS8tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA8EAACAQMCBAUBBgMHBAMAAAABAgADERIEIQUxQVEGEyJhcYEjMkKRobEHwfAUFVJi0eHxM1NykhYkgv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAKBEBAQACAQQABQQDAAAAAAAAAAECESEDEjFBBBMiQsEyYZHwI1GB/9oADAMBAAIRAxEAPwD5OJYlQoZQQhKliAQlySxAuEBKAhgQJaWBCtLCwIBDUSARgEA0EaiwaazQiwgQsLGMCywsAMZeMYFl4wF4wsYzGFjIpBSTGPxkwhCMZWMfjIVgZysArNJWAyyjKyxTLNTLFMsDMwiWWamWKYQMzCKYTQwi8CTYAknkALn8oVnYQDPSafwdrqtE1ko3VQTiHQ1CBzsl7k+3OeddZJZfC2WeSiIJjDAMqAtJLkgHCEoSxAsQxBEIQCEIQRDECwIwCCojFEIsCGBIohhYA4xiiWFhqsBlJZoVYNJZoVYA4wsYzGXjAALLCxiiEFkCwkLGMCy8Y2pVpMY7CTGTYQUkxmgrJhGxmKQGWaysW6yoxskS6zYyxDrKMjrEss1ssHT6U1aq0h+IjL/x/r+cluosm7p1PDPhc6sM7llpqPSAAC7dr/hHvaa+N0KemoAUqflsKirWBH2gI3sxO5U7EdCJ9F8PcOWlSVABsPaeV/iZw9lo+YhAxxByP4L8r9bXuB06cyJ57lbXtnTxxx4eB8P+KdTpmGLki+4O/Xeep4pwShxVH1Wn+z1VizUtvLqkC5H+V9ufXr3nlOCeH2rHzDVCgki+3TvfafTuA8HpaOkaheo5K88QANug2kyvbd4r05MsdZvjOooPTYo6MjDmjqyMPkHcRDT6b/FSnTrafS6qkpIVqtGpUt3CsgJ+j/rPmbT0Y5bm3jzx7ctAklyTTIhCgiEIFiGIIhCAQhrKUQwIBKIxRBWNUQglEYolII1RAgWMRZarGosimUlj1WVTWNUQirS7QhCAhQhYaiQCMAigQsvGHaEFkUASTGMtLAgABKKRoEhEBOMW6zSyxbLAxssS6zW6xDrKyyVbKCTyAJPwJs8EUfMr+aw5nb2HScrjTHDy1+9UIAA7Dc/6T0f8O6bq+DLYjoec59W8O3Qm8n1rhtOyieZ/iZSQ6GoG2utgffpPU6VwBPFfxYqK2hZct9iN+ZBnJ6ud14LgSrRpo5bJmsbcwD2Ve8+l8M1Pn0vui1twxufyE+M8D1yohLXLEhFPbl/rPsPhrRmmmJqDcfhX+ZMmc1Uwu4TrNKus0Op0C07FUNSmVuPtUOafO62+s+IE3F+8/SfCwFrFedxfKwH0nwjxtp0p8R1KUwAgrvYDYC+5A9rkzr0r6cfiJztwJJck7POKWIIhCAQhiAsYIBARggiGBANRGoItY9RCGII1RFpHKIDFEdTEWoj0EimqIxYCwxAswxBEIQCAhrAEYIBKIQEGGJFQCFaS0uBVpZkEhgAYDRpi2H9WvAQ8y13t7k8hG6pmHVKYsTlWZVNhzxTmTNngajp9RWKVC7MvrV3GIcg8gOYA2/WTK2ThccZbquRpeC1XreY+1h6WIOIPMC3+Egz1PhTjFPJlbYq1ipHIjnOh4xbCkRTXkMbDtyE8tVpnT1qFa3orDy6l/wDuDv8AT9p58t5PZhJjeH13R6hXUEHbpON4p4d/aKLU+4IHKM4VqlC/pNuSt1k3uO3bqvzzxThFbRVgjj0lji3Qn/Wem4b4praOhTLEOHLDf74I5fIt+3vPrPEuD6fUoUqorKe/fuD0M8Txn+HNKwqU2chWCsrMzegm1x2sSPpc9Ju3flxmPb+l3PAHHW1WTuoXlj1PvefJPGDq3ENSV5HU1vzyN/1vPrXhjgJ0D4ZBqbf4jZ0/ky+/6T4vxaoraiqyG6NXrMjc7qajFT+Vpro+3L4j0xSSSTu8yxCEEQhAMQxAENYDFjFi1jVgMWOQRSxyQhyiMWLSNWA5I1IlI0GRTgYYMUDGKYDBCvAEsRsGphwRLBgNvCBi1MMSLDBIIKwP7St8QcmHMLvb5PIQHRdSuq7E7m5CgFmNtzYDedXhnBDXCOa9MCpgwpIQ7lb3N2U7AjqBt3nq/wC56VPErQLgZL5aeWBvzZgxAbkBveYuTpOnbNvl1fjCXVUDMW5+Uoqso5cr2JJI2vHUtNo3JNZ6gqIyh1r507G/3WDqAL2OwefSuBUqZr1Kq0VQsiIwXYqUZgVcWtlc81uPTz2BJ8S4Xo6hddUyNnU83ymqeWAQgpqbAgk2HM35m013ek+XfLxVVNHVANasCFsEQVNCqKOgULU2UDp89Sb5R4i0OjqXoUvMfkStyex9RAUfTKdPhf8ADujXVq5rNg7MdOqLjZQ5AFTK5NwBtsR8zfT8GaFdK1atTNNnBqt6z9kL3wW/5crm8v0syZ+ZI6/DtFT1NEVhcrXQOMuYJ7/BH6Tlcb4EalAqBujrUUH/ACHf9LzqeBCE0Yosw8ynUqB6dwSjZbrsfeH4h8QUNKpya9Qjamu7H3t0+s4ZYc8PVh1Pp3Xg9RxSrpnKHlZTc/Fv5frNHDfFFmxZtr9T3/3nn+NcUbUE3UKu23M2HK5nFZAOk1Olxyxl8Td8PrzeI6K86qW23LATi8V8eUabDy6meJOSqhZWUgAi9wO/XrPmtSIeanSnti/EZenpvEfjvVau6rjSplcMU9TleVi5/laePMY0U06SSeHK23yGSVJKghCE9PrKlC5V0zy2DFN1JI3yF3IA6fziOO+H1o4PSZmpVFDLWsDRY9kYEnncWbfaEcJYYhvpXXmu3ceofpFiA1Y1YpI1YU5Y1YlI5IQ0RqmKUxgMB6wwYlTGKZFOBhgxQhKYDgYQMXeC2ppqbM6i3e/7CRWkGFec59WzH0Wx/wARBFvfqB3/AOJKFNi2T1Otiu537ex+be15ZixcpGytrUQXN7dLAkH4PKZqXFWqNjTo1X2v9mpqN/6jlNleiKVOozKwSopFNDiSXx5jFrjffltLrcR1L0xfUaZXupSmqKHuCN8jfD5NrxZl9sJnh910x1NPrq6HytPUOP3ixQVF2/7WxB+QfacPUaXVCmM1r+UdrsKhp3BtiegIPQ7z2S6nXhlrVKtNCoZVqstPyyGt6c1Ug3sNo/T8X1yM+owpVKbhRUKp6CVFsytwQSCASV3xEzPmz7Z/Lf8Aiy4mS/BPi56dCoj0TUakobzMwrMC2KqRbYAWAt2M6Gj8V17MtNFAf1HP1utVt6hTe2N9wDy/Sc+lxOiUejVpNp6oDLRrIputPmKdQEBmQG/MEAW3uLzo6A6alTXUu/2NRA61MS5UgXZHwGzDvyPtaTum/DpMcpJzw76cY04ohKFQLWqmo1qpAqeklqj1Dc2Ng1r9x05YfFPizTHT2oVM6tQBqVSnYmiwIIZ+qnntaeY4sx1tRayAmi6AUhuCEuRv2NwSfm06nBeA+Y2AIVUCVHLIXBOV1W2wPLf2+ZdSeTuyy4j0fD9TT09IvTOorgKalSqrDyWdlDsxyNl2N9v1MbxrjmipENVs2IypsENVSSWFlIuMvQ36+85ut1SaTRDTVCoZjVDJRsCUNRjZRviCCOfIHvaeG1dc1HLm+52BZmCrc2Aufc/mZNbXLK4zSk4hUTUVNRS+yDs+FNABijdCNxfr2vMFeoWJYkliblmJJJ9zHOZnqTbiz1JnqR9QzNUMqEVIh41zEOYC2i2htFtAGSSSFekqcULEVAihKbqxy3LkHZT89vmdZ+K3LnSlvJq0yr0gpwpuw9OxuCQbb8rXnkNRXYqLkmx+7YBLfAtNnDuJVdMfNRrBvS6EXRh1UryksWV6HiHCnVlqUWp7i7LUFNkBxuxBA5Dfp067zFrKmnxUNg1QlcmUWVVvvyvuPYGZNfxOhUGS0qiM1vMXzPsr9MdifpOXmC3Uc+RDSyXXLGWWMvD6GeGcKwv9k9mpqzUHqoqZtZS7s5A6++3KZ+McH4bSP2bO5uFNKjVDsLi97kEduZE8ZWqJSClWDsdxzsPp0PzMra1z+Kw6AHl9ZmY/u6Xqca09COEsVarYrTWxszDPHIDbaxO8bw7h9OqxW9X0oXa2BNgQLgdeY7Tza6xwLZXHO15t0/F2Ug8mBFnW6sPgib057epXwszi9OqpuLhXXBrfQmZq3ANRTIBUG4uLMOX1mzg3iVrojlMWOLPUpXcXBt922Qyt35zu6PjWkZjnVyKWNzSZV57AWXlMfVHT6L708e+grLzpPtzspP7RQNue3zPb8T1pJUo1JKRZcqqrmVQjY4D1Ecje1tr9IGi4vTqVWpsuTISv9o04BQjYXUdj7iXlON6eNVorUa1UHcnYdv8Aee/1CEZU2sAdxXWlTUKuJJFTYYn3nhuOaCn5jfeIWwz9Qvt0v/OSXlcsdThya2sd2tcix5ZYn3/rnNGroU2NqSgWvcuxBc+wbb85n0eld6gQPZC4U1KguiFvu5HkL8vrO23h3XUmACq+ZIBpMotYXuSygCb+mWXbhfmdtnbK42nD8hipvYlr02BHvYAR/wDeVSktr1NgVyFNLW32LkHIC/L8jK4no6tBwdRRcq/IuaYq2FgQGVum2/L2nOp6h0eyFlvtYmzAHoT8dRade6V55hnL7btO1zc6g02xO7Kd7747G4B+LRz1ygCNSpeqxFQGkHCg72KbD/8AV4r+7jVpM6oimkuRwBBI2uT8Dfl+c6XhPhxaqFZQVYYtfop5zNzk8Ok6Fy8/38KphSB5dZ6jA/8AQyBAFtyGIxP0Wd2jxCtSpJWQU6VK2FRGZCSTfcNbkR2sB2nA4ZwQVSyI3qszUz3tuL/My6WtVwcBUYUxmyugPp5Ga75WL0bPDuah9Ni9FqoYoBUoEBy1rXKXHpBsbdNx2iQ66XCvTqCrSZitWkxxYkoysKie6FwG6e4nKOtVmpMaKhccckNRdwzHcsW/r4lU6/noKKo1s2qA3yCrYgA9r7dekZ4zLHk6XUzwy45/n8laPxNW0oalSKNSDsaYrJkVueYsRYnqNxeei8P8X1So1Z6tXzKzXKnEJiPukLjdRz2B3nM0HB6dI5t6n5gnkPgd/f8AadBmnG6r2Y2z2LUVmdizMWY7libmZmMJminMgBzM7mG5iHMqFOZncxrtM9QwFOYhjGuYhjABoswzAMKGSXKgaEcEHckDoBb94FRi25+OW3xE6apY2sSDvtzmqvqVKYKnUEsxGW3sPmIXwWXJ79uftaUf67wEMt32t+c1vlzsmmjSabzqqU72uQGIsLDuPpN+r4KtKoabM5sCysuJDp0I259CJj4N/wBS/wDhG3yf6M9DreKrTZLIrutNwWPNVO4H1IH5SZXVawm5p5unpVNiagG1yORHPb8x+onSfSaYKotXLMAS1MqVX5uNz7CITVE1ciiqXGQZQOVja35TrUePvTp1KedqmWADAk4j8Q7kybLP9sml0dQ02wGVFN2dmWkd+n3rbG3WHRaoq+bZyuyu1BQEFPbdmt379veTid/KRgSVZ2dydl84soXIb7YggH9Z67wtrgKeHkvZh6nBVzlb3Ym30l+ZcYToTqX93ldPxQsVuTsDgGxQ2xP3XFh26TvcP4ki2c+mtgtqqD07HlVTo1iAGGx2nnfFtNKeovS2Sopc07bK97MV6C/PaYRrGxt6hdVpobjdMuR+LbH2nS6ym3nky6eWnt//AJLkppPkadz5tLzCFck39LWJW4326idIcGp65yc3ogpSfyW8p3ZGv6gVYgLba/O97ifNeHVC9VVszZOuQVWdimQv6V3O159XXXaEtTFCkpqoSU8qkaRRAbOWNh6e4PPsZwz48Pd0p3+XH0uk0mgapTrU7sajtTZ6BrM1IAfiVSD1NrC1/qe1Q1q09KKppeXTAywFvTSLfeI6ek3I6biK4pSoap8HuXVCbBnUhH2O4IuPT+k8dxji+oUVNH51IgKqmri6tgFuQ1ri5A3+eW+3L9Tvv5bd420uno0g9JnD1mQECq7rUQXb1XJ263nFp6bzdNkR60qIEP4iHJBH05/Qzn6yrVosWrUKbKxuGQBUvb8LL062PcwF4sz7YKETcIPULna7X3O3Xpedscb4eXqZybunoKH/ANbT1C1/MrI1KlT/ABNkCCQvYAk/SFodYWuj1lWgyEN6QtQ3BHqZRutwL2sSD7b+UNQM4YsQQgGRLPyXqed7zsta62YAktu6nc7ADcdDvz/edZhNcvPn1styx6zRcQo6dsVrUmqMCKQDqRnid2YbAfJ3NhOLrNE1Ol5hIxqVPLvzuQCbj2BA37j2mLh/DqTP5jqfLDHGkTcuR32HpvO3qKvm2zC2U3VQPSNrD9Jxu5eHpxuNm7/xx9BoHchyzIliMetv8vYe87tNQosoAHtEh4Wc1ba5zGQ0tBZovOCzSNI7RTtIzRLNAp2iHaEzRDtKgHaIcw3aJcwFuYpjDYxTGFCYBhGCYFSSpIBADmB7GWALHne3K0BWhEX6/MigvYQbyM15V5pixv0NZU3JAO9r779JKzg7KQb82vzJ5kzngw/M7SK6OnYs2/1PPlOu1ehUIDopNrFrb2+Z5tXsPfvDpVuvWNbXus8OzWV6QZUu9GopFjd7X79/maOFah6IJJIBRVVbm+3XecZdU/IEwX1rKd926XN7RomXto47qs3Vb38tbH/yY3P8ozR0EUq9YkruEUD1G452PITkpUtv1J5n94ZqG/O+3Pv/ALy3xpnGc7epXjq0qZpUVWijAr6Nqje7PzvMGg8R16D5swc+WtIU3PpCg3GOOwG3L3nENS8Fue/zJJG8sr5nl2Nb4grVajVPusVVUKswZFBvYEd77/TtOYapa5JJJJJ3JJPuYgP/AF1jaVTf0rcnn1/4jj0zz7rRptW6mwfG43DbqfYg7RVWuLmwQEizFORB9un0jRpnbkgUd2MfS4cv4jf2GwgslmmapXao3IMdwDaxt8zXpuGsbFjYdhe/5zZRRU2AA+I3OXurMwhtKygAcgLCH5kzZyZzLTVnL8yZRUl5wNOcovM+crOA1nimaAzxbPKLZol2kZopmgU5iXMJjFEwBYwDLaAYVRgmWZUCSSpIH/2Q=="
                alt="Estudio de tatuajes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Overlay con información */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Estudio Profesional</h3>
                <p className="text-sm opacity-90">Ambiente seguro y profesional para tu tatuaje</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
