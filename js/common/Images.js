class Images {
    static get SIZE() {
        return 16;
    }

    static get SOURCES() {
        return [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDcCIxet2AAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAApElEQVR4nGM4c+ZM57wPQFTStA1CIjPQEFAxA1BuzvrfWKXREEQZAzFKkRGTqIwVAxho6LriQQwwwMSABPj4WIAIwmDAAZhePzmGzP/06Q+cxK4B7iRiAXIg4EEITxNv9NsXVxgwPY1Hg7CEDroGrH59+/4rMhenkyDqkFVjcRKKAwS5ISSEgQBw7ydmdeFBcGUM8FRFbOIDplhcKiAGI9sAVAwATNblg/SgMfsAAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDcXTspJMwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAApElEQVR4nGM4c+ZM6ZHjQBTT1Q0hkRloCKiYASjXfvkqVmk0BFHGQIxSZMQkaWXDAAbanl54EAMMMDEgAX4ubiCCMBhwAKbnx44g8z9++wonsWuAO4lYgBwIeBDC08Qb/fr6NQZMT+PRIKqpha4Bq1/fffyEzMXpJIg6ZNVYnIQMhPj5ICSEgQBw77snJuJBcGUM8FRFbOIDplhcKiAGI9sAVAwAcI7P7bN4vTYAAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDY2G7hoLAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAApElEQVR4nGM4c+ZM56UdQFS8aCKERGagIaBiBqDcnAfHsUqjIYgyBmKUIiMmMQN1BjDQtDPDgxhggIkBCfBx8QARhMGAAzC9unATmf/p2xc4iV0D3EnEAuRAwIMQnibe6De3HzJgehqPBhFVeXQNWP369tNHZC5OJ0HUIavG4iRkIMzHDyEhDASAez++tggPgitjgKcqYhMfMMXiUgExGNkGoGIAJYXjRTBqCYQAAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDYqD7k0YwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAAnUlEQVR4nGM4c+bM/ykpQLS3MgpCIjPQEFAxA0j18mqs0mgIooyBGKXIiMlJmosBDJz0FPEgBhhgYkAG/MIgBGHgAEz7nn5DEfj4FkFi1QB3ErEAORDwIISniTf6wsuvDFg8jRsYiHNjaMDq17cvkXm4nQRRh6Qam5OQgbA4lIQw4ADu/d4kfzwIrowBnqqITXzAFItLBcRgZBuAigG2W9ML6+xFIgAAAABJRU5ErkJggg==',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDcKLcwl6gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAApElEQVR4nGM4c+bM3pJPQDQtYweERGagIaBiBqDc6Y4/WKXREEQZAzFKkRGTOo8VAxiYKrjgQQwwwMSABLgFmIEIwmDAAZhufjmGzP/64S+cxK4B7iRiAXIg4EEITxNv9INPVxgwPY1HgwKfDroGrH799OYbMhenkyDqkFVjcRIy4BPhgpAQBgLAvV8W1YMHwZUxwFMVsYkPmGJxqYAYjGwDUDEAv7bpg5h8XA8AAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDYUztgpyAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAApElEQVR4nGM4c+bMq/wWIFqXkAshkRloCKiYASj3o20WVmk0BFHGQIxSZMRkwy/OAAZearp4EAMMMDEgAXYRQSCCMBhwAKYjH18i83++eQ8nsWuAO4lYgBwIeBDC08QbfeXjGwZMT+PRoMMvgq4Bq18/vXyFzMXpJIg6ZNVYnIQM+MTFICSEgQBw7zcFRuJBcGUM8FRFbOIDplhcKiAGI9sAVAwAzHHRZfXkd5UAAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDYeLg3A1gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAAoUlEQVR4nGM4c+bMzzuTgOjgujoIicxAQ0DFDEC5/08XYJVGQxBlDMQoRUZMFnoiDGBgZ66EBzHAABMDMmDnASEIAwdgOnHpDYrAzy8IEqsGuJOIBciBgAchPE280Vduv2XA4mncQEdVGEMDNr/++v4JmYvTSRB1yKqxOQkJsHHyQUgIAwHg3p/amY0HwZUxwFMVsYkPmGJxqYAYjGwDUDEA1mH9PgXalgQAAAAASUVORK5CYII='
        ]
    }

    static get BACKGROUND() {
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3gYaDDM59nCB+AAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAABnRSTlMAzADMAMxIJOP0AAAAW0lEQVR4nGMwNTYuSswiEgEVMxCvGoKgGsL8gvEjuDImBhiQERbHgyT4+SFqEBqIBKRpePL2JWkaSHYSyTYwkOqHQa0BEpd4EEIHSSkPmJYYIMkbOXnhSYtAxQDb3WWpUAR7nAAAAABJRU5ErkJggg==';
    }
}