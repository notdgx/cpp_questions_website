    class Area{

    public:
        int calculate(int side){
            return side * side;
        }

        int calculate(int length, int width){
            return length * width;
        }

        int calculate(int base, int height, int mode){
            if (mode == 1){
                return (base * height) / 2;
            }

            return 0;
        }