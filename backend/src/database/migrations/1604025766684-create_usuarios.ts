import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUsuarios1604025766684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name:'usuarios',
            columns: [
                {
                  name:'id',
                  type:'integer',
                  unsigned:true,
                  isPrimary:true,
                  isGenerated:true,
                  generationStrategy:'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'type_user',
                    type: 'varchar',
                },
                {
                    name:'latitude',
                    type:'decimal',
                    scale:2,
                    precision:4,
                },
                {
                    name:'longitude',
                    type:'decimal',
                    scale:2,
                    precision:4,
                },
                {
                    name:'cep',
                    type:'text',

                },
                {
                    name:'street',
                    type:'text',
                },
                {
                    name:'number',
                    type:'text',
                },
                {
                    name:'district',
                    type:'text',
                },
                {
                    name:'about',
                    type:'text',
                },
                {
                    name:'instructions',
                    type:'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name:'open_on_weekends',
                    type:'boolean',
                    default:false,
                },
            ],
        }))
        //realizar alterações
        //criar tabela, criar campo, deletar campo
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
        //desfazer o q foi feito no up
    }

}
